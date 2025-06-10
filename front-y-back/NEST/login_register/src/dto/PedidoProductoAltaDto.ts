import { IsInt } from "class-validator";

export class PedidoProductoAltaDto {
  @IsInt()
  id_pedido: number;
  @IsInt()
  id_producto: number;

  constructor(id_pedido: number, id_producto: number) {
    this.id_pedido = id_pedido;
    this.id_producto = id_producto;
  }
}