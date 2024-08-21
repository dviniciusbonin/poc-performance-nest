#!/bin/sh

echo "Running load tests on Nest.js Express server..."
autocannon -c 10 -d 10 http://express:4000

echo "\nRunning load tests on Nest.js Fastify server..."
autocannon -c 10 -d 10 http://fastify:3000
