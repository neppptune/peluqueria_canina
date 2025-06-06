import { IsDate, IsInt, IsString, Length } from 'class-validator';
export class CitaDTO {
  id_cita?: number;
  @IsDate()
  fecha: Date;
  hora: string;
  @Length(4)
  mascotaId: number;
  @Length(9, 9)
  empleadoDni: string;
  @IsString()
  @Length(50)
  clienteEmail: string;

  constructor(fecha: Date, hora: string, mascotaId: number, empleadoDni: string, clienteEmail: string, id_cita?: number) {
    this.fecha = fecha;
    this.hora = hora;
    this.mascotaId = mascotaId;
    this.empleadoDni = empleadoDni;
    this.clienteEmail = clienteEmail;
    this.id_cita = id_cita;
  }
}