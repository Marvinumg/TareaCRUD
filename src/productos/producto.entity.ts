import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';
import { IsOptional, IsNotEmpty, IsString, MinLength, IsNumber, Min } from 'class-validator';

@Entity('productos')
export class Producto {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 100 })
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  nombre: string;

  @Column({ nullable: true })
  @IsOptional()
  @IsString()
  descripcion?: string;

  @Column('decimal', { precision: 10, scale: 2 })
  @IsNumber()
  @Min(0.01)
  precio: number;

  @Column('int')
  @IsNumber()
  @Min(0)
  stock: number;

  @CreateDateColumn()
  fechaCreacion: Date;
}
