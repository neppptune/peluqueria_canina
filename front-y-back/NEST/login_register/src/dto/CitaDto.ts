import { IsDate, IsInt, IsString, Length } from 'class-validator';
export class CitaDto {
  id_cita: number;
  email_cliente: string;
  dni_empleado: string;
  id_mascota: number;
  fecha: Date;
  hora: string;

  constructor(id_cita?: number, clienteEmail?: string,empleadoDni?: string, mascotaId?: number,fecha?: Date, hora?: string) {
    this.id_cita = id_cita;
    this.email_cliente = clienteEmail;
    this.dni_empleado = empleadoDni;
    this.id_mascota = mascotaId;
    this.fecha = fecha;
    this.hora = hora;
  }
}