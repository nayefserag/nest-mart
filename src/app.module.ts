import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ormConfig } from './config/orm.config';
import { ProductsController } from './components/products/products.controller';
import { ProductsModule } from './components/products/products.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LoggingInterceptor } from './logging/logging.interceptor';
import { ProductsService } from './components/products/products.service';
import { ProductsRepository } from './repos/products.repo';
import { Product } from './entities/product.entity';
@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: ormConfig,
    }),
    TypeOrmModule.forFeature([Product]),
    ProductsModule,
  ],
  controllers: [ProductsController],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
    ProductsService,
    ProductsRepository,
  ],
})
export class AppModule {}
