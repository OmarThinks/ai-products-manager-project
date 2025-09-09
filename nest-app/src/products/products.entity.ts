import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'product' })
class ProductsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: number;
}

export { ProductsEntity };
