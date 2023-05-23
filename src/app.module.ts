
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService, Friday, Monday, Saturday, Thursday, Tuesday, Wednesday } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService , Monday, Tuesday, Wednesday, Thursday, Friday, Saturday ],
})
export class AppModule {}
