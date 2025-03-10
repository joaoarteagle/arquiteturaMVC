import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { join } from 'path';
import { response, Response } from "express"
import * as fs from 'fs'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(){
   return this.appService.getHello();
  }
}
