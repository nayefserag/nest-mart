import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';
export function setupSwagger(app: INestApplication) {
  const options = new DocumentBuilder()
    .setTitle('Nest Mart API')
    .setDescription('Default')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document);
}
