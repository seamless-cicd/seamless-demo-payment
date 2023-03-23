# Seamless Demo

Simulates a microservice architecture with 2 services that communicate with each other. The CI/CD pipeline enables us to update and deploy each one independently.

1. Payment Service
2. Notification Service

Both are intended to be deployed to a Fargate cluster and communicate via Service Connect.

## This Repo is Microservice 1: Payment Service

### Has an Express app with 1 route:

`/payments`

Listens for POST request and responds with status 200:
```
{
    "message": "Payment of $42 received"
}
```

Then sends a POST request to the Notification Service:
```
{
    "message": "You paid $42. Thanks for being a customer!"
}
```
