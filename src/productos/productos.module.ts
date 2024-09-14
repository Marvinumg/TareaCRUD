import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductosService } from './productos.service';
import { ProductosController } from './productos.controller';
import { Producto } from './producto.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Producto])], // Importa el repositorio del producto
  providers: [ProductosService],
  controllers: [ProductosController],
})
export class ProductosModule {}
