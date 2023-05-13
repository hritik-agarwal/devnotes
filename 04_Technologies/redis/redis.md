* Redis is an in-memory data structure store used as a database, cache and message broker.

* It stores data in a key-value format i.e. like in a NoSQL database.

* It runs inside the working memory and hence it is way faster but it is volatile i.e. when system restarts, it will lose all its data.

* Basic Commands
```cpp
// Installing, Running and Using
brew install redis
redis-server
redis-cli

// Adding key-value
set <key> <value>
get <key>
del <key>
exists <key>

// Utility commands
ttl <key> => check expiration time (in sec)
key * => get all keys matching some regex
flushall => empty the redis
expire <key> <time> => set expiration time of a key
setex <key> <time> <value> => set key-value along with expire time

// Adding arrays
lpush <key> <value>
rpush <key> <value>
lpop <key>
rpop <key>
lrange <key> <start> <end>
rrange <key> <start> <end>

// Adding sets
sadd <key> <value>
srem <key> <valye>
smembers <key>

// Adding hash
hset <key> <field> <value>
hget <key> <field>
hdel <key> <field>
hgetall <key>
hexists <key>

```

* Redis use cases
1. Caching
2. Session Store
3. Distributed Lock
4. Rate Limiter
5. Leaderboard