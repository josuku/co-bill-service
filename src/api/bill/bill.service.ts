import { Injectable } from '@nestjs/common';
import { BillResponse, Product } from './bill.interface';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

@Injectable()
export class BillService {
  public calculateTotal(products: Product[]): BillResponse {
    let result: BillResponse = {
      total: 0,
      errorMessage: null
    };

    if (products.length === 0) {
      result.errorMessage = 'No products added to the basket';
    }
    else {
      for (const p in products) {
        result.total += products[p].quantity * products[p].cost;
      }
    }
    return result;
  }

  public checkProductsAreValid(products: Product[]): boolean {
    for (const p in products) {
      if (!products[p].id || !products[p].cost || !products[p].quantity) {
        return false;
      }
    }
    return true;
  }
}
