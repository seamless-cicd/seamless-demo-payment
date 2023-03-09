# Seamless Demo

Simulates a microservice architecture with 3 services that communicate with each other. The CI/CD pipeline enables us to update and deploy each one independently.

1. API Gateway + React app hosting
2. Payment Service
3. Notification Service

## This Repo is Microservice 2: Payment Service

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