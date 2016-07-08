
# Timestamp microservice

## Description

User stories:
- I can pass a string as a parameter, and it will check to see whether that string
contains either a unix timestamp or a natural language date (example: January 1, 2016)
- If it does, it returns both the Unix timestamp and the natural language form of that date.
- If it does not contain a date or Unix timestamp, it returns null for those properties.

Example usage:

    https://fcp-microtime-service.herokuapp.com/123456789
    {"unix":123456789,"natural":"Fri Jan 02 1970"}

## How to test

    git clone https://github.com/bcolucci/fcp-microtime-service.git \
      && npm install \
      && npm test \
      && npm start \
      && xdg-open http://localhost:3210/545799000000
