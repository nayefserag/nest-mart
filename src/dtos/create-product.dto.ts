import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  IsDecimal,
  IsNumber,
} from 'class-validator';

export class CreateProductDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  price: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  quantity: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  image: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  categoryId: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  brandId: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  subCategoryId: number;
}
