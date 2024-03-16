import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from 'src/app.module';
import { HttpExceptionFilter } from './logging/http-exception.filter';
import { setupSwagger } from './config/swagger.config';
import { ConfigService } from '@nestjs/config';
import * as os from 'os';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get<number>('PORT');
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  app.useGlobalFilters(new HttpExceptionFilter());
  setupSwagger(app);
  await app.listen(port, () => {
    console.log(`Application is running on: ${port}`);
    console.log(os.hostname());
  });
}
bootstrap();
