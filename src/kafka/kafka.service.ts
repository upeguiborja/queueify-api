import { Injectable } from '@nestjs/common';
import { Consumer, Producer } from 'kafkajs';
import { consumer } from './kafka';

@Injectable()
export class KafkaService {
  private kafkaConsumer: Consumer;
  private kafkaProducer: Producer;

  constructor() {
    this.kafkaConsumer = consumer;
  }

  async connectConsumer(groupId: string) {
    await this.kafkaConsumer.connect();
  }

  async connectProducer() {
    return await this.kafkaProducer.connect();
  }
}
