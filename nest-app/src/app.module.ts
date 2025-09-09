import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsEntity } from './products/ProductsModule';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      //database: 'test',
      database: 'data/db.sqlite',
      entities: [ProductsEntity],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
