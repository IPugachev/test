import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { SendBasketDto } from 'basket/dto/basket.dto';
import { BasketService } from './basket.service';

@Controller('basket')
export class BasketController {
  constructor(private readonly basketService: BasketService) {}
  @Post()
  @HttpCode(HttpStatus.OK)
  sendBasket(@Body() dto: SendBasketDto): string {
    return this.basketService.sendBasket(dto);
  }
}
