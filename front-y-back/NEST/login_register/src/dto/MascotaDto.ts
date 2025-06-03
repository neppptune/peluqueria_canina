export class MascotaDTO {
  id_mascota?: number;
  nombre: string;
  raza: string;
  edad: number;
  clienteEmail: string;

  constructor(nombre: string, raza: string, edad: number, clienteEmail: string, id_mascota?: number) {
    this.nombre = nombre;
    this.raza = raza;
    this.edad = edad;
    this.clienteEmail = clienteEmail;
    this.id_mascota = id_mascota;
  }
}