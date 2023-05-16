/* eslint-disable operator-linebreak */
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ThrottlerModule } from '@nestjs/throttler';
import { TypeOrmModule } from '@nestjs/typeorm';
import V1Module from '@v1/v1.module';
import { MorganInterceptor, MorganModule } from 'nest-morgan';
import AppController from './app.controller';
import AppService from './app.service';

@Module({
  imports: [
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 10,
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useFactory: (cfg: ConfigService) => ({
        type: 'postgres',
        url:
          cfg.get('DATABASE_URL') ||
          'postgres://brtdvijhphwwru:729ca0c0962b7de0b1eaaee2ba2e7f6f8f8bae8369f5dd79ea0617fb5d101e88@ec2-52-73-155-171.compute-1.amazonaws.com:5432/d5c91ev35n3fo4',
        entities: ['dist/**/*.entity{.ts,.js}'],
        synchronize: true,
        ssl: { rejectUnauthorized: false },
      }),
      inject: [ConfigService],
    }),
    MorganModule,
    V1Module,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: MorganInterceptor('tiny'),
    },
  ],
})
export default class AppModule {}
