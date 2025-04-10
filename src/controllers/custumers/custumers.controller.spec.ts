import { Test, TestingModule } from '@nestjs/testing';
import { CustumersController } from './custumers.controller';
import { CustumersService } from './custumers.service';

describe('CustumersController', () => {
  let controller: CustumersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustumersController],
      providers: [CustumersService],
    }).compile();

    controller = module.get<CustumersController>(CustumersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
