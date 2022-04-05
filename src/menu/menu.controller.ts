import { Controller, Get } from '@nestjs/common';
import { Menu } from 'interfaces/app';
import { MenuService } from './menu.service';

@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}
  @Get()
  getMenu(): Menu {
    return this.menuService.getMenu();
  }
}
