import { Cita } from './../model/Cita';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CitaDto } from 'src/dto/CitaDto';
import { Producto } from 'src/model/Producto';
import { Repository } from 'typeorm';


@Injectable()
export class CitaService {
  
  constructor(
    @InjectRepository(Cita) private repositoryCita:Repository<Cita>,
  ){}

  // Devolucion de todas las citas
  async findAllCitas(): Promise<CitaDto[]> {
    return await this.repositoryCita.find();
  }

  // Devover las citas de un cliente
  async findQuotesByClient(cita:CitaDto):Promise<CitaDto[]>{
    const result = await this.repositoryCita.createQueryBuilder("cita")
    .where("dni_usuario:=dni",{dni:cita.dni_empleado})
    .getMany();

    if(result){
      return result;
    }
  }

  // Alta de una cita
  async highQuote(cita:CitaDto):Promise<boolean>{
    const high :Cita = await this.repositoryCita.createQueryBuilder("citas")
    .where("id_cita=:cod",{cod:cita.id_cita})
    .getOne();
    
    if(high){
      return false;
    }else{
      this.repositoryCita.save(high);
      return true;
    }
  }
}
