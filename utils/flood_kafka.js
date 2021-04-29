const { Kafka } = require('kafkajs');
const { randomBytes } = require('crypto');

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['localhost:9093'],
});

const producer = kafka.producer();

async function flood_kafka() {
  await producer.connect();

  for (let i = 0; i < 100; i++) {
    await producer.send({
      topic: 'test_topic',
      messages: [{ key: i.toString(), value: randomBytes(16).toString('hex') }],
    });
  }

  await producer.disconnect();
}

flood_kafka();
