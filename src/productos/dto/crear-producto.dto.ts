import { IsString, IsNotEmpty, MinLength, IsNumber, Min, IsOptional } from 'class-validator';

export class CrearProductoDto {
  @IsString()  // El nombre debe ser una cadena
  @IsNotEmpty()  // El nombre no puede estar vacío
  @MinLength(3, { message: 'El nombre debe tener al menos 3 caracteres' })  // Mínimo de 3 caracteres
  nombre: string;

  @IsOptional()  // La descripción es opcional
  @IsString()  // Si está presente, debe ser una cadena
  descripcion?: string;

  @IsNumber()  // El precio debe ser un número
  @Min(0.01, { message: 'El precio debe ser mayor que 0' })  // El precio debe ser mayor que 0
  precio: number;

  @IsNumber()  // El stock debe ser un número
  @Min(0, { message: 'El stock debe ser mayor o igual a 0' })  // El stock debe ser mayor o igual a 0
  stock: number;
}
