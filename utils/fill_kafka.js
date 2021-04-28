const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['localhost:9093'],
});

const producer = kafka.producer();

async function fill_kafka() {
  await producer.connect();
  await producer.send({
    topic: 'test_topic',
    messages: [{ value: 'Hello KafkaJS user! 2' }],
  });

  await producer.disconnect();
}

fill_kafka();
