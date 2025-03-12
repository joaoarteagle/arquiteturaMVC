import { Module } from '@nestjs/common';
import { LocaisService } from './locais.service';
import { LocaisController } from './locais.controller';
import { DatabaseModule } from 'src/database/database.module';
import { locaisProviders } from './locais.providers';

@Module({
  imports:[DatabaseModule],
  controllers: [LocaisController],
  providers: [LocaisService,
    ...locaisProviders
  ],
})
export class LocaisModule {}
