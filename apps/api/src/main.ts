
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Standard API version prefix
  app.setGlobalPrefix('api/v1');

  app.enableShutdownHooks();

  await app.listen(process.env.PORT ?? 3000);
}

await bootstrap();
