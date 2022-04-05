import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Menu } from 'interfaces/app';
import { generatorProductData } from './mockData';

@Injectable()
export class MenuService {
  constructor(private readonly config: ConfigService) {}
  menu = generatorProductData();
  getMenu(): Menu {
    return this.menu;
  }
}
