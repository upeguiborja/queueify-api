const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['localhost:9093'],
});

const consumer = kafka.consumer({ groupId: 'test-group' });

async function get_kafka() {
  await consumer.connect();
  await consumer.subscribe({ topic: 'test_topic', fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        value: message.value.toString(),
      });
    },
  });
}

get_kafka();
