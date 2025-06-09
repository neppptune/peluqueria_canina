import { Cita } from './../model/Cita';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CitaDTO } from 'src/dto/CitaDto';
import { Repository } from 'typeorm';


@Injectable()
export class CitaService {
  
  constructor(
    @InjectRepository(Cita) private repositoryCita:Repository<Cita>,
  ){}

  // Devolucion de todas las citas
  async findAllCitas(): Promise<CitaDTO[]> {
    return await this.repositoryCita.find();
  }

  // Devover las citas de un cliente
  async findQuotesByClient(email:string):Promise<CitaDTO[]>{
    return await this.repositoryCita.find();
  }

  // Modificar una cita
  async updateQuote(emal:string, cita:CitaDTO):Promise<CitaDTO>{
    
  }
}
