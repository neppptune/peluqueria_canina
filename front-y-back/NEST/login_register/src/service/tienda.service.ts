import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tienda } from './model/tienda.entity';
import { CrearArticuloDto } from './dto/crear-articulo.dto';

@Injectable()
export class TiendaService {
  constructor(
    @InjectRepository(Tienda)
    private readonly tiendaRepo: Repository<Tienda>,
  ) {}

  // Mostrar
  async obtenerTodos(): Promise<Tienda[]> {
    return await this.tiendaRepo.find();
  }

  // Añadir
  async crearArticulo(dto: CrearArticuloDto): Promise<Tienda> {
    const nuevoArticulo = this.tiendaRepo.create(dto);
    return await this.tiendaRepo.save(nuevoArticulo);
  }

  //Eliminar
  async eliminarArticulo(id: number): Promise<void> {
    const resultado = await this.tiendaRepo.delete(id);
    if (resultado.affected === 0) {
      throw new NotFoundException("Artículo no encontrado");
    }
  }
}