import { BadRequestException, Body, Controller, Get, Logger } from '@nestjs/common';
import { BillResponse, Product } from './bill.interface';
import { MessagePattern } from '@nestjs/microservices';
import { BillService } from './bill.service';

@Controller()
export class BillController {
  constructor(private readonly billService: BillService) {}

  @MessagePattern('calculateTotal')
  public async createSentOrder(@Body() products: Product[]): Promise<BillResponse> {
    Logger.log(products)
    if (!this.billService.checkProductsAreValid(products)) {
      Logger.error('Bad Request', products);
      throw new BadRequestException();
    }
    return this.billService.calculateTotal(products);
  }
}
