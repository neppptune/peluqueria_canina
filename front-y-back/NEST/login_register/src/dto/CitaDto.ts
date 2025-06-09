import { IsDate, IsInt, IsString, Length } from 'class-validator';
export class CitaDto {
  id_cita: number;
  fecha: Date;
  hora: string;
  id_mascota: number;
  dni_empleado: string;
  email_cliente: string;

  constructor(fecha?: Date, hora?: string, mascotaId?: number, empleadoDni?: string, clienteEmail?: string, id_cita?: number) {
    this.fecha = fecha;
    this.hora = hora;
    this.id_mascota = mascotaId;
    this.dni_empleado = empleadoDni;
    this.email_cliente = clienteEmail;
    this.id_cita = id_cita;
  }
}