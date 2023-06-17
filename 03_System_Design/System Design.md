# System Design

## Topics

1. Rate Limiting

## Rate Limiting

- It is taking the number of requests in proportion to the number of request we can serve.
- It prevents the servers from getting overloaded and avoid effects like
  - Server Crash
  - Delayed Response
  - Resource Drought
  - Cascading Failure
  - Out of Memory Exceptions
- Cascading Failure is a situation when a server gets overloaded, so all its request are distributed among remaining servers but due to this increased requests, those servers also starts crashing and soon enough the entire system is dead.
