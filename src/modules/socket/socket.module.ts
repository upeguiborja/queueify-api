import { Module } from '@nestjs/common';
import { KafkaModule } from 'src/kafka/kafka.module';
import { SocketGateway } from './socket.gateway';

@Module({
  imports: [KafkaModule],
  controllers: [],
  providers: [SocketGateway],
})
export class SocketModule {}
