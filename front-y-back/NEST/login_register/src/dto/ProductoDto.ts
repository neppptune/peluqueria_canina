export class ProductoDTO {
  id_producto?: number;
  nombre: string;
  descripcion: string;
  precio: number;
  stock: number;

  constructor(nombre: string, descripcion: string, precio: number, stock: number, id_producto?: number) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = precio;
    this.stock = stock;
    this.id_producto = id_producto;
  }
}