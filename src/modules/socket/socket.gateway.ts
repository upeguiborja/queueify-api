import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { Server, Socket } from 'socket.io';
import { KafkaService } from 'src/kafka/kafka.service';

@WebSocketGateway()
export class SocketGateway {
  @WebSocketServer() server: Server;

  constructor(private readonly kafkaService: KafkaService) {
    this.kafkaService.init('test_group');
  }

  private logger: Logger = new Logger('SocketGateway');

  @SubscribeMessage('clientMessage')
  public async handleMessage(client: Socket, payload: string): Promise<void> {
    this.logger.log(
      `Message incoming - client: ${client.id}, payload: ${payload}`,
    );
    await this.kafkaService.sendMessage(payload, 'test_topic');
    this.server.emit('serverMessage', payload);
  }

  afterInit(server: Server) {
    this.logger.log('-- Socket IO Server Init --');
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnected: ${client.id}`);
  }

  handleConnection(client: Socket) {
    this.logger.log(`Client connected: ${client.id}`);
  }
}