import { Entity, PrimaryColumn, Column, OneToMany, ManyToOne, PrimaryGeneratedColumn, JoinColumn } from 'typeorm';
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

  @Column()
  id_mascota: number;

  @Column()
  dni_empleado: string;

  @Column()
  email_cliente: string;

  @ManyToOne(() => Mascota, mascota => mascota.citas)
  @JoinColumn({ name: 'id_mascota', referencedColumnName: 'id_mascota' })
  mascota: Mascota;

  @ManyToOne(() => Empleado, empleado => empleado.citas)
  @JoinColumn({ name: 'dni_empleado', referencedColumnName: 'dni' })
  empleado: Empleado;

  constructor(mascota: Mascota, empleado: Empleado, fecha: Date, hora: string) {
    this.mascota = mascota;
    this.empleado = empleado;
    this.fecha = fecha;
    this.hora = hora;
  }
}
