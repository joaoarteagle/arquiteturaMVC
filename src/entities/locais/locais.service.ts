import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Local } from './local.interface';


@Injectable()
export class LocaisService {
  constructor(
    @Inject('LOCAL_MODEL')
    private localModel: Model<Local>,
  ){}


  
  create(createLocaiDto: any) {
    return 'This action adds a new locai';
  }

  findAll() {
    return `This action returns all locais`;
  }

  findOne(id: number) {
    return `This action returns a #${id} locai`;
  }

  update(id: number, updateLocaiDto: any) {
    return `This action updates a #${id} locai`;
  }

  remove(id: number) {
    return `This action removes a #${id} locai`;
  }
}
