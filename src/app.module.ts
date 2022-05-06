import { Module } from '@nestjs/common';
import { MicroServiceModule } from './microservice/microservice.module';

@Module({
  imports: [
    MicroServiceModule
  ]
})
export class AppModule {}

