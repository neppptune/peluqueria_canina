import { ProductoDatosDto } from "./ProductoDatosDto";


export class PedidoProductoDatosDto {
  id_pedido: number;
  id_producto: number;
  producto: ProductoDatosDto;
  constructor(id_pedido: number, id_producto: number, producto: ProductoDatosDto) {
    this.id_pedido = id_pedido;
    this.id_producto = id_producto;
    this.producto = producto;
  }
}