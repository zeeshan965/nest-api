import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import configuration from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      //ignoreEnvFile: true (use only if ENV variables are provided through runtime)
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
