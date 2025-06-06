import { IsEmail, IsInt, IsString, Length } from "class-validator";

export class MascotaDTO {
  @IsInt()
  id_mascota?: number;
  @IsString()
  @Length(2,15)
  nombre: string;
  @IsString()
  @Length(2,10)
  raza: string;
  @IsInt()
  edad: number;
  @IsEmail()
  @Length(10,40)
  clienteEmail: string;

  constructor(nombre: string, raza: string, edad: number, clienteEmail: string, id_mascota?: number) {
    this.nombre = nombre;
    this.raza = raza;
    this.edad = edad;
    this.clienteEmail = clienteEmail;
    this.id_mascota = id_mascota;
  }
}