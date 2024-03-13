import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from 'src/app.module';
import { HttpExceptionFilter } from './logging/http-exception.filter';
import { setupSwagger } from './config/swagger.config';
import * as dotenv from 'dotenv';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  dotenv.config();
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  app.useGlobalFilters(new HttpExceptionFilter());
  setupSwagger(app);
  await app.listen(process.env.PORT);
}
bootstrap();
