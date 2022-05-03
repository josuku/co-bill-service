import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { host, port } from './config';

const microserviceOptions = {
  transport: Transport.TCP,
  options: {
    host: host,
    port: port
  },
};

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, microserviceOptions);
  Logger.log('Running in ' + microserviceOptions.options.host.toString() + ':' + microserviceOptions.options.port.toString());
  app.listen();
}
bootstrap();
