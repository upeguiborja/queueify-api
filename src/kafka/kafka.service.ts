import { Injectable } from '@nestjs/common';
import { Consumer, Kafka, Producer } from 'kafkajs';

@Injectable()
export class KafkaService {
  private kafkaClient: Kafka;
  private kafkaConsumer: Consumer;
  private kafkaProducer: Producer;

  constructor() {
    this.kafkaClient = new Kafka({
      clientId: 'my-app', //TODO: Set in config
      brokers: ['localhost:9093'], //TODO: Set in config
    });
  }

  public async init(groupId: string) {
    this.kafkaConsumer = this.kafkaClient.consumer({ groupId: groupId });
    this.kafkaProducer = this.kafkaClient.producer();
    await this.kafkaConsumer.connect();
    await this.kafkaProducer.connect();
  }

  async sendMessage(message: string, topic: string) {
    await this.kafkaProducer.send({
      topic: topic,
      messages: [{ value: message }],
    });
  }
}
