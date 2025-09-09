import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductsEntity } from './products.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(ProductsEntity)
    private productsRepository: Repository<ProductsEntity>,
  ) {}

  findAll(): Promise<ProductsEntity[]> {
    return this.productsRepository.find();
  }

  findOne(id: number): Promise<ProductsEntity | null> {
    return this.productsRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.productsRepository.delete(id);
  }
}
