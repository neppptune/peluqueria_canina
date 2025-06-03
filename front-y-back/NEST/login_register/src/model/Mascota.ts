import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany } from 'typeorm';
import { Cliente } from './Cliente';
import { Cita } from './Cita';

@Entity('mascotas')
export class Mascota {
  @PrimaryGeneratedColumn()
  id_mascota: number;

  @Column()
  nombre: string;

  @Column()
  raza: string;

  @Column()
  edad: number;

  @ManyToMany(() => Cliente, cliente => cliente.mascotas)
  cliente: Cliente;

  @OneToMany(() => Cita, cita => cita.mascota)
  citas: Cita[];

  constructor(nombre: string, raza: string, edad: number, cliente: Cliente) {
    this.nombre = nombre;
    this.raza = raza;
    this.edad = edad;
    this.cliente = cliente;
  }
}