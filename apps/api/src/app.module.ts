
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { PrismaModule } from './prisma/prisma.module.js';
import { DatabaseHealthController } from './database-health.controller.js';
import { SecurityModule } from './security/security.module.js';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    SecurityModule,
  ],
  controllers: [
  AppController,
  DatabaseHealthController,
],
  providers: [AppService],
})
export class AppModule {}
