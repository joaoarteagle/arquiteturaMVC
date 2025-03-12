import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LocaisService } from './locais.service';

@Controller('locais')
export class LocaisController {
  constructor(private readonly locaisService: LocaisService) {}

  @Post()
  create(@Body() createLocaiDto: any) {
    return this.locaisService.create(createLocaiDto);
  }

  @Get()
  findAll() {
    return this.locaisService.findAll();
  }

 
}
