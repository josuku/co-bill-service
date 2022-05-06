import { Test, TestingModule } from '@nestjs/testing';
import { BillController } from './bill.controller';
import { BillService } from './bill.service';

describe('AppController', () => {
  let appController: BillController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [BillController],
      providers: [BillService],
    }).compile();

    appController = app.get<BillController>(BillController);
  });
});
