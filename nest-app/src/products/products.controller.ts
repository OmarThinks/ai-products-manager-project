import { Controller, Get } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller({ path: 'products' })
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async getAllProducts() {
    return await this.productsService.findAll();
  }
}
