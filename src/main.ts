import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as morgan from 'morgan';

// Apply morgan middleware for logging HTTP requests

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(morgan('dev'));
  await app.listen(process.env.PORT ?? 3000);
  console.log(`Server running on port ${process.env.PORT || 3000}`);
}
bootstrap();
