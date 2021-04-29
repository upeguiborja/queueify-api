# Queuify API

To run the project please use the LTS version of nodejs, docker and compose are required.

- install dependencies with `npm install`
- run the kafka and zookeeper infrastructure with `docker-compose up -d`
- run the development server with `npm start`

It runs when both the server and the client are running on localhost as
for now it has no configuration files nor environment variables to specify
external API host, nor external kafka brokers.

Dockerized build and image can be done if you ask me to do so :) to deploy on the same
docker network.
