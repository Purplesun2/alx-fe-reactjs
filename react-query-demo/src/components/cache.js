const LRU = require('lru-cache');

const cache = new LRU({
  max: 100, // Maximum number of items
  maxAge: 1000 * 60 * 5 // Cache expiration time (5 minutes)
});

module.exports = cache;
