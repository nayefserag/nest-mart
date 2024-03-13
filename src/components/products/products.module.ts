import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsRepository } from 'src/repos/products.repo';
import { Product } from 'src/entities/product.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsController } from './products.controller';

@Module({
  controllers: [ProductsController],
  imports: [TypeOrmModule.forFeature([Product])],
  providers: [ProductsService,ProductsRepository]
})
export class ProductsModule {}
