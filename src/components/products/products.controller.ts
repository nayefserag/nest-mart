// products/products.controller.ts
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  HttpStatus,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from 'src/entities/product.entity';
import { CreateProductDto } from 'src/dtos/create-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async findAll() {
    const products = await this.productsService.findAll();
    console.log(products);
    return {
      message: 'Products Fetched successfully',
      status: HttpStatus.OK,
      data: products,
    };
  }

  @Get(':id')
  async findById(@Param('id') id: number) {
    const product = await this.productsService.findById(id);
    return {
      message: 'Product Fetched successfully',
      status: HttpStatus.OK,
      data: product,
    };
  }

  @Post('newProoduct')
  async create(@Body() productData: CreateProductDto) {
    const product = await this.productsService.create(productData);
    return {
      message: 'Product created successfully',
      status: HttpStatus.CREATED,
      data: product,
    };
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() productData: Partial<Product>,
  ){
    const product = await this.productsService.update(id, productData);
    return {
      message: 'Product updated successfully',
      status: HttpStatus.OK,
      data: product,
    }
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    const deleted = this.productsService.delete(id);
    return {
      message: 'Product deleted successfully',
      status: HttpStatus.NO_CONTENT,
     
    }
  }
}
