import { Entity, PrimaryColumn, ManyToOne } from 'typeorm';
import { Pedido } from './Pedido';
import { Producto } from './Producto';

@Entity('pedidos_productos')
export class PedidoProducto {
  @PrimaryColumn()
  id_pedido: number;

  @PrimaryColumn()
  id_producto: number;

  @ManyToOne(() => Pedido, pedido => pedido.pedidosProductos, { onDelete: 'CASCADE' })
  pedido: Pedido;

  @ManyToOne(() => Producto, producto => producto.pedidosProductos, { onDelete: 'CASCADE' })
  producto: Producto;
  
  constructor(pedido: Pedido, producto: Producto) {
    this.pedido = pedido;
    this.producto = producto;
    this.id_pedido = pedido.id_pedido;
    this.id_producto = producto.id_producto;
  }
}