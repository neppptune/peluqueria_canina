import { PedidoProductoDatosDto } from "./PedidoProductoDatosDto";

export class PedidoDatosDto {
  id_pedido: number;  
  clienteEmail: string;
  fecha: Date;
  productos: PedidoProductoDatosDto[]
  constructor(id_pedido: number,fecha: Date, clienteEmail: string) {
    this.id_pedido = id_pedido;
    this.fecha = fecha;
    this.clienteEmail = clienteEmail;
  }
}