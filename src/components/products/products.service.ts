import { Injectable } from '@nestjs/common';
import { CreateProductDto } from 'src/dtos/create-product.dto';
import { Product } from 'src/entities/product.entity';
import { ProductsRepository } from 'src/repos/products.repo';

@Injectable()
export class ProductsService {
  constructor(private readonly productsRepository: ProductsRepository) {}

  async findAll(): Promise<Product[]> {
    return await this.productsRepository.findAll();
  }
  async findById(id: number): Promise<CreateProductDto> {
    return await this.productsRepository.findById(id);
  }

  async create(productData: CreateProductDto): Promise<CreateProductDto> {
    return await this.productsRepository.create(productData);
  }

  async update(
    id: number,
    productData: Partial<CreateProductDto>,
  ): Promise<CreateProductDto> {
    return await this.productsRepository.update(id, productData);
  }

  async delete(id: number): Promise<Boolean> {
    return await this.productsRepository.delete(id);
  }
}
