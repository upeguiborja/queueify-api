import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { KafkaModule } from './kafka/kafka.module';
import { SocketGateway } from './socket.gateway';

@Module({
  imports: [AuthModule, UsersModule, KafkaModule],
  controllers: [AppController],
  providers: [AppService, SocketGateway],
})
export class AppModule {}
