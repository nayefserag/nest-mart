import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from '../entities/product.entity';
import { CreateProductDto } from 'src/dtos/create-product.dto';

@Injectable()
export class ProductsRepository {
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
  ) {}
  async create(productData: CreateProductDto): Promise<CreateProductDto> {
    const product = await this.productsRepository.create(productData);
    return product;
  }

  async findById(id: number): Promise<Product> {
    return await this.productsRepository.findOne({ where: { id } });
  }

  async findAll(): Promise<Product[]> {
    return await this.productsRepository.find();
  }

  async update(id: number, productData: Partial<Product>): Promise<Product> {
    await this.productsRepository.update(id, productData);
    return await this.productsRepository.findOne({ where: { id }});
  }

  async delete(id: number): Promise<Boolean> {
    if (await this.productsRepository.delete(id)) {
      return true;
    } else {
      return false;
    }
  }
}
