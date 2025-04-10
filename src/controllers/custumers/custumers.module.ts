import { Module } from '@nestjs/common';
import { CustumersService } from './custumers.service';
import { CustumersController } from './custumers.controller';

@Module({
  controllers: [CustumersController],
  providers: [CustumersService],
})
export class CustumersModule {}
