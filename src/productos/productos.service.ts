import { Injectable, NotFoundException } from '@nestjs/common';  // Importa NotFoundException
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Producto } from './producto.entity';
import { CrearProductoDto } from './dto/crear-producto.dto';
import { ActualizarProductoDto } from './dto/actualizar-producto.dto';

@Injectable()
export class ProductosService {
  constructor(
    @InjectRepository(Producto)
    private readonly productoRepositorio: Repository<Producto>,
  ) {}

  async obtenerTodos(): Promise<Producto[]> {
    return await this.productoRepositorio.find();
  }

  async obtenerUno(id: string): Promise<Producto> {
    const producto = await this.productoRepositorio.findOne({ where: { id } });
    if (!producto) {
      throw new NotFoundException(`Producto con ID ${id} no encontrado`);  // Lanza la excepción
    }
    return producto;
  }

  async crear(crearProductoDto: CrearProductoDto): Promise<Producto> {
    const producto = this.productoRepositorio.create(crearProductoDto);
    return await this.productoRepositorio.save(producto);
  }

  async actualizar(id: string, actualizarProductoDto: ActualizarProductoDto): Promise<Producto> {
    const producto = await this.obtenerUno(id);
    Object.assign(producto, actualizarProductoDto);
    return await this.productoRepositorio.save(producto);
  }

  async eliminar(id: string): Promise<void> {
    const producto = await this.obtenerUno(id);
    await this.productoRepositorio.remove(producto);
  }
}
