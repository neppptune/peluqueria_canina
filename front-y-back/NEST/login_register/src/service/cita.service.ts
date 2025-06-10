import { CitaAltaDto } from './../dto/CitaAltaDto';
import { Cita } from './../model/Cita';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CitaDto } from 'src/dto/CitaDto';
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
  async findQuotesByClient(email: string):Promise<CitaDto[]>{
    const result = await this.repositoryCita.createQueryBuilder("cita")
    .where("email_cliente:=email",{email})
    .getMany();

    if(result){
      return result;
    }
  }

  // Alta de una cita
  async highQuote(cita:CitaAltaDto):Promise<boolean>{
    const high :Cita = await this.repositoryCita.createQueryBuilder("citas")
    .where("fecha=:fecha AND hora=:hora", { fecha: cita.fecha, hora: cita.hora })
    .getOne();
    
    if(high){
      return false;
    }else{
      this.repositoryCita.save(high);
      return true;
    }
  }

  // Modificar Cita

  async modifyQuote(cita:CitaAltaDto):Promise<boolean>{
    const result = await this.repositoryCita.createQueryBuilder()
      .update(Cita)
      .set({ ...cita })
      .where("fecha = :fecha AND hora = :hora", { fecha: cita.fecha, hora: cita.hora })
      .execute();

    return result.affected && result.affected > 0;
  }

  // Eliminar Cita

  async deleteQuote(cita:CitaAltaDto):Promise<boolean>{
    const delet :Cita = await this.repositoryCita.createQueryBuilder("citas")
    .where("fecha=:fecha AND hora=:hora", { fecha: cita.fecha, hora: cita.hora })
    .getOne();
    
    if(delet){
      this.repositoryCita.delete(delet);
      return true;
    }else{
      return false;
    }
  }

}
