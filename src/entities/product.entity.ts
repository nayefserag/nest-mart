import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column('decimal', { precision: 5, scale: 2 })
  price: number;

  @Column()
  quantity: number;

  @Column()
  image: string;

  @Column()
  categoryId: number;

  @Column()
  brandId: number;

  @Column()
  subCategoryId: number;

}
