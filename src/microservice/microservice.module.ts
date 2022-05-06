import { Module } from '@nestjs/common';
import { BillController } from './bill/bill.controller';
import { BillService } from './bill/bill.service';

@Module({
  imports: [],
  controllers: [BillController],
  providers: [BillService],
})
export class MicroServiceModule {}
