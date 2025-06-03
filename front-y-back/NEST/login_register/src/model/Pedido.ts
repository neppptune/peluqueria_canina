import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Cliente } from './Cliente';
import { PedidoProducto } from './PedidoProducto';

@Entity('pedidos')
export class Pedido {
  @PrimaryGeneratedColumn()
  id_pedido: number;

  @Column()
  fecha: Date;

  @ManyToOne(() => Cliente, cliente => cliente.pedidos)
  cliente: Cliente;

  @OneToMany(() => PedidoProducto, pp => pp.pedido)
  pedidosProductos: PedidoProducto[];

  constructor(fecha: Date, cliente: Cliente) {
    this.fecha = fecha;
    this.cliente = cliente;
  }
}