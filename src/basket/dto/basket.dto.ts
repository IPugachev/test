import { IsNotEmpty } from 'class-validator';
import { Product } from 'interfaces/app';

export class SendBasketDto {
  @IsNotEmpty()
  totalPrice: number;
  @IsNotEmpty()
  products: Product[];
}
