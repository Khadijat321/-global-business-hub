
import { Controller, Get } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service.js';

@Controller('health')
export class DatabaseHealthController {
  constructor(private readonly prisma: PrismaService) {}

  @Get('database')
  async checkDatabase() {
    await this.prisma.$queryRaw`SELECT 1`;

    return {
      status: 'success',
      database: 'connected',
      application: 'Global Business Hub API',
    };
  }
}
