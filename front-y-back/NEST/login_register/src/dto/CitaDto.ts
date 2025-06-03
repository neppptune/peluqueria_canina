export class CitaDTO {
  id_cita?: number;
  fecha: Date;
  hora: string;
  mascotaId: number;
  empleadoDni: string;
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