import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsEntity } from './products.entity';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ProductsEntity])],
  exports: [TypeOrmModule],
  providers: [ProductsService],
  controllers: [ProductsController],
})
export class ProductsModule {}
