import { Kafka } from 'kafkajs';

export const kafka = new Kafka({
  clientId: 'my-app', //TODO: Set in config
  brokers: ['localhost:9093'], //TODO: Set in config
});

export const consumer = kafka.consumer({ groupId: 'test_group' });
export const producer = kafka.producer();
