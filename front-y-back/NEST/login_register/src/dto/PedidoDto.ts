export class PedidoDTO {
  id_pedido?: number;
  fecha: Date;
  clienteEmail: string;

  constructor(fecha: Date, clienteEmail: string, id_pedido?: number) {
    this.fecha = fecha;
    this.clienteEmail = clienteEmail;
    this.id_pedido = id_pedido;
  }
}