import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as morgan from 'morgan';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
  app.use(morgan('dev'));
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
