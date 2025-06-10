import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductoAltaDto } from 'src/dto/ProductoAltaDto';
import { ProductoDatosDto } from 'src/dto/ProductoDatosDto';
import { Producto } from 'src/model/Producto';
import { Repository } from 'typeorm';

@Injectable()
export class TiendaService {
  constructor(
    @InjectRepository(Producto)
    private readonly productoRepo: Repository<Producto>,
  ) {}

  // Mostrar
  async obtenerTodos(): Promise<Producto[]> {
    return await this.productoRepo.find();
  }

  // Añadir
  async crearArticulo(dto: ProductoAltaDto): Promise<ProductoDatosDto> {
    return await this.productoRepo.save(dto);
  }


  //Eliminar
  async eliminarArticulo(id: number): Promise<void> {
    const resultado = await this.productoRepo.delete(id);
    if (resultado.affected === 0) {
      throw new NotFoundException("Artículo no encontrado");
    }
  }
}