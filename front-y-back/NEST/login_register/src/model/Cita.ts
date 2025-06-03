import { Entity, PrimaryColumn, Column, OneToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Mascota } from './Mascota';
import { Cliente } from './Cliente';
import { Empleado } from './Empleado';
@Entity('citas')
export class Cita {
  @PrimaryGeneratedColumn()
  id_cita: number;

  @Column()
  fecha: Date;

  @Column()
  hora: string;

  @ManyToOne(() => Mascota, mascota => mascota.citas)
  mascota: Mascota;

  @ManyToOne(() => Empleado, empleado => empleado.citas)
  empleado: Empleado;

  @ManyToOne(() => Cliente, cliente => cliente.citas)
  cliente: Cliente;

  // Constructor opcional
  constructor(mascota: Mascota, empleado: Empleado, cliente: Cliente, fecha: Date, hora: string) {
    this.mascota = mascota;
    this.empleado = empleado;
    this.cliente = cliente;
    this.fecha = fecha;
    this.hora = hora;
  }
}
