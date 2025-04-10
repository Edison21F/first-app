import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './controllers/products/products.controller';
import { CustumersController } from './custumers/custumers.controller';
import { UsersController } from './controllers/users/users.controller';
import { ProductsService } from './controllers/products/products.service';
import { CustumersModule } from './controllers/custumers/custumers.module';

@Module({
  imports: [CustumersModule],
  controllers: [AppController, ProductsController, CustumersController, UsersController],
  providers: [AppService, ProductsService],
})
export class AppModule {}
