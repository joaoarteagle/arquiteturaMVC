import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Local } from './local.interface';


@Injectable()
export class LocaisService {
  constructor(
    @Inject('LOCAIS_MODEL')
    private localModel: Model<Local>,
  ){}



  async create(createLocalDto: any): Promise<Local> {
    const criado = new this.localModel(createLocalDto);
    return criado.save();
  }

  async findAll(): Promise<Local[]> {
    return this.localModel.find().exec();
  }

 
}
