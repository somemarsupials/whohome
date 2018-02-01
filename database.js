'use strict';

const redis = require('redis');

const client = redis.createClient(process.env.REDIS_URL);

client.fieldNames = {
  count: 'personCount',
  userNS: 'person:',
};

module.exports = client;
