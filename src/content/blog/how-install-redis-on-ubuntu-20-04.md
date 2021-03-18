---
title: 'How to Install & Get start with Redis on Ubuntu 20.04'
slug: '/how-install-redis-on-ubuntu-20-04'
author: [Yuvaraj V]
tags: [redis, nosql, keyvalue-store, in-memory-data-store]
featuredImage: ../images/redis.png
date: '2021-03-18'
---


[Redis (Remote Dictionary Server)](https://en.wikipedia.org/wiki/Redis) is an opensource In-memory key-value (NoSQL) type data store which generally be used to enhance the data access time in dynamic applications. 

Redis is not an alternative to the disk persistance database system such as MySQL or MongoDB, instead this will compliment the application by acting as a cache layer (with optional data durability feature). it reduce the load on the database systems & improve the data access time in the application.
Redis can also be used as message broker.

Redis supports different kinds of abstract data structures, such as strings, lists, maps, sets, sorted sets, HyperLogLogs, bitmaps, streams, and spatial indexes.

Now we will see how to install and perform some basic operations on redis data store.

## Step 1: Install redis from Official PPA
Redis developers offering official Ubuntu [PPA](https://askubuntu.com/questions/4983/what-are-ppas-and-how-do-i-use-them/4990#4990) for latest stable version of redis.

You can add PPA, update the package list and then install redis using `apt install` command.

```bash
sudo add-apt-repository ppa:redislabs/redis
sudo apt update
sudo apt install redis
```

## Step 2: Check for successful resdis installation
If the installation is successful you can check the current status of redis server with `systemctl` command.

```bash
sudo systemctl status redis-server.service
```

If server is running this will print some thing like below one..

```bash
● redis-server.service - Advanced key-value store
     Loaded: loaded (/lib/systemd/system/redis-server.service; disabled; vendor preset: enabled)
     Active: active (running) since Wed 2021-03-17 16:03:54 IST; 15h ago
       Docs: http://redis.io/documentation,
             man:redis-server(1)
   Main PID: 41408 (redis-server)
     Status: "Ready to accept connections"
      Tasks: 5 (limit: 18379)
     Memory: 5.5M
```

if server is not running (*inactive*)

```bash
● redis-server.service - Advanced key-value store
     Loaded: loaded (/lib/systemd/system/redis-server.service; disabled; vendor preset: enabled)
     Active: inactive (dead)
       Docs: http://redis.io/documentation,
             man:redis-server(1)
```

you can start it using `sudo systemctl start redis-server.service`

If you want to learn more about systemctl command you can check [my old article about it..](https://opensourceinside.kodemonk.dev/2016/04/how-to-manage-systemd-services-on-linux.html)

## Getstart with redis-cli
Now you can use `redis-cli` command to connect to the redis server, then you can execute the redis commands and set or modify data structures.

To know more about the redis cli usage and commands check the below video..

Video contains steps to install redis & basic usage of redis CLI and usage of commands like.. `SET`, `GET`, `EXPIRE` and `TTL`

### Install & Get start Redis on Ubuntu 20.04
`youtube: https://www.youtube.com/watch?v=7KIoPlqAbzg`
