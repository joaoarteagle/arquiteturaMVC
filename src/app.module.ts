import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { LocaisController } from './entities/locais/locais.controller';
import { LocaisService } from './entities/locais/locais.service';
import { locaisProviders } from './entities/locais/locais.providers';
import { databaseProviders } from './database/database.provider';
import { LocaisModule } from './entities/locais/locais.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    LocaisModule,

  ],
  controllers: [AppController, ],
  providers: [AppService
  ],
})
export class AppModule {}
