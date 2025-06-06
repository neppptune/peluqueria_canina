import { IsInt, IsNumber, IsString, Length } from "class-validator";

export class ProductoDTO {
  @IsInt()
  id_producto?: number;
  @IsString()
  @Length(2,15)
  nombre: string;
  @IsString()
  @Length(0,500)
  descripcion: string;
  @IsNumber()
  precio: number;
  @IsInt()
  stock: number;

  constructor(nombre: string, descripcion: string, precio: number, stock: number, id_producto?: number) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = precio;
    this.stock = stock;
    this.id_producto = id_producto;
  }
}