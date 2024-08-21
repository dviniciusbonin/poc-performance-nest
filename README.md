# POC - Perfmonce test in nest

The goal of this repository is to analyze performance between Express and Fastify in NestJS. For this test, a simple example of Fibonacci implementation is used.

Instructions to execute:

1. Navigate to the root directory of the project.
2. Open a terminal and run the following command:

```docker compose up -d```

3. This command will build and start the necessary Docker containers for the performance test.
4. Once the containers are running, you can access the application and perform the desired performance testing.
5. The results of the performance test will be displayed in the terminal where you executed the `docker compose exec autocannon sh run-tests.sh` command.

To perform the performance test, autocannon was used. You can find more details about the metrics in the official documentation at https://github.com/mcollina/autocannon#readme.