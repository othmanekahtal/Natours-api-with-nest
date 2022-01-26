import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
console.log(process.env.HOSTED_DB);

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      process.env.HOSTED_DB.replace('<password>', process.env.PASSWORD_DB),
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
