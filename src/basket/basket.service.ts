import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SendBasketDto } from './dto/basket.dto';

@Injectable()
export class BasketService {
  constructor(private readonly config: ConfigService) {}
  sendBasket(dto: SendBasketDto): string {
    console.log(dto);
    return 'success';
  }
}
