import { IsDate, IsEmail, IsInt, Length } from "class-validator";

export class PedidoAltaDto {
  @IsDate()
  fecha: Date;
  @IsEmail()
  @Length(10,40)
  clienteEmail: string;

  constructor(fecha: Date, clienteEmail: string, id_pedido?: number) {
    this.fecha = fecha;
    this.clienteEmail = clienteEmail;
  }
}