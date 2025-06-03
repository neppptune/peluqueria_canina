import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Pedido } from './Pedido';
import { Producto } from './Producto';

@Entity('pedidos_productos')
export class PedidoProducto {
  @PrimaryColumn()
  id_pedido: number;

  @PrimaryColumn()
  id_producto: number;

  @ManyToOne(() => Pedido, pedido => pedido.pedidosProductos, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'id_pedido', referencedColumnName: 'id_pedido' })
  pedido: Pedido;

  @ManyToOne(() => Producto, producto => producto.pedidosProductos, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'id_producto', referencedColumnName: 'id_producto' })
  producto: Producto;

  constructor(id_pedido: number, id_producto: number) {
    this.id_pedido = id_pedido;
    this.id_producto = id_producto;
  }
}