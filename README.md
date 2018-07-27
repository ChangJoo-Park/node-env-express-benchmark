Express의 NODE_ENV [Development vs Production] 벤치마크

비교 대상
- NODE_ENV=development
- NODE_ENV=production
- NODE_ENV=production, compress
- NODE_ENV=production, compress, cluster(pm2)

참고자료

https://www.dynatrace.com/news/blog/the-drastic-effects-of-omitting-node_env-in-your-express-js-applications/
http://expressjs.com/en/advanced/best-practice-performance.html#set-node_env-to-production

벤치마크 도구

wrk -t12 -c400 -d30s http://127.0.0.1:3000


```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 134054
ETag: W/"20ba6-CirA3UkMm7txTrid2N4PRxTDC00"
Date: Thu, 26 Jul 2018 13:52:13 GMT
Connection: keep-alive
```

### PM2 fork no compress, development
```
Running 1m test @ http://127.0.0.1:3000
  12 threads and 400 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   587.75ms  107.93ms   1.25s    84.54%
    Req/Sec    90.72     85.70   323.00     74.19%
  40066 requests in 1.00m, 5.01GB read
  Socket errors: connect 0, read 172, write 63, timeout 0
Requests/sec:    666.55
Transfer/sec:     85.35MB
```

### PM2 fork compress default, development
```
Running 1m test @ http://127.0.0.1:3000
  12 threads and 400 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   566.01ms   52.85ms   1.40s    93.50%
    Req/Sec    81.51     73.85   323.00     78.86%
  41751 requests in 1.00m, 5.22GB read
  Socket errors: connect 0, read 68, write 28, timeout 0
Requests/sec:    694.87
Transfer/sec:     89.00MB
```

### PM2 fork compress best, development
```
Running 1m test @ http://127.0.0.1:3000
  12 threads and 400 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   559.96ms   47.55ms   1.34s    96.34%
    Req/Sec    85.70     80.01   320.00     70.13%
  42060 requests in 1.00m, 5.26GB read
  Socket errors: connect 0, read 183, write 20, timeout 0
Requests/sec:    700.27
Transfer/sec:     89.69MB
```

### PM2 cluster no compress, development
```
Running 1m test @ http://127.0.0.1:3000
  12 threads and 400 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   256.79ms   63.32ms   1.96s    89.86%
    Req/Sec   128.40     71.40   838.00     71.24%
  85131 requests in 1.00m, 10.65GB read
  Socket errors: connect 0, read 0, write 0, timeout 268
Requests/sec:   1416.39
Transfer/sec:    181.37MB
```

### PM2 cluster compress default, development
```
Running 1m test @ http://127.0.0.1:3000
  12 threads and 400 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   284.50ms   69.17ms   1.98s    88.03%
    Req/Sec   113.17     63.58     0.97k    76.28%
  75188 requests in 1.00m, 9.40GB read
  Socket errors: connect 0, read 29, write 10, timeout 269
Requests/sec:   1250.93
Transfer/sec:    160.21MB
```

### PM2 cluster compress best, development
```
Running 1m test @ http://127.0.0.1:3000
  12 threads and 400 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   283.04ms   72.31ms   2.00s    85.69%
    Req/Sec   116.61     70.70     0.87k    72.33%
  76538 requests in 1.00m, 9.57GB read
  Socket errors: connect 0, read 0, write 0, timeout 271
Requests/sec:   1273.43
Transfer/sec:    163.09MB
```

### PM2 fork no compress, production
```
Running 1m test @ http://127.0.0.1:3000
  12 threads and 400 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   567.97ms   63.93ms   1.54s    95.58%
    Req/Sec    68.04     56.80   323.00     74.79%
  41662 requests in 1.00m, 5.21GB read
  Socket errors: connect 0, read 71, write 41, timeout 0
Requests/sec:    693.36
Transfer/sec:     88.79MB
```

### PM2 fork compress default, production
```
Running 1m test @ http://127.0.0.1:3000
  12 threads and 400 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   578.86ms   59.15ms   1.57s    95.22%
    Req/Sec    84.10     72.10   323.00     71.66%
  40874 requests in 1.00m, 5.11GB read
  Socket errors: connect 0, read 50, write 14, timeout 0
Requests/sec:    680.24
Transfer/sec:     87.12MB
```

### PM2 fork compress best, production
```
Running 1m test @ http://127.0.0.1:3000
  12 threads and 400 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   574.31ms   52.66ms   1.45s    94.92%
    Req/Sec    83.92     81.54   323.00     79.34%
  40979 requests in 1.00m, 5.13GB read
  Socket errors: connect 0, read 199, write 6, timeout 0
Requests/sec:    681.84
Transfer/sec:     87.33MB
```

### PM2 cluster no compress, production
```
Running 1m test @ http://127.0.0.1:3000
  12 threads and 400 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   259.36ms   64.01ms   1.98s    89.68%
    Req/Sec   128.88     65.86   787.00     76.39%
  84380 requests in 1.00m, 10.55GB read
  Socket errors: connect 0, read 0, write 0, timeout 264
Requests/sec:   1404.23
Transfer/sec:    179.82MB
```

### PM2 cluster compress default, production
```
Running 1m test @ http://127.0.0.1:3000
  12 threads and 400 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   265.21ms   64.26ms   1.99s    89.75%
    Req/Sec   122.45     69.56     0.94k    72.10%
  82027 requests in 1.00m, 10.26GB read
  Socket errors: connect 0, read 35, write 1, timeout 271
Requests/sec:   1364.81
Transfer/sec:    174.80MB
```

### PM2 cluster compress best, production
```
Running 1m test @ http://127.0.0.1:3000
  12 threads and 400 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   264.09ms   61.50ms   1.99s    88.34%
    Req/Sec   125.18     67.27     1.04k    76.14%
  80387 requests in 1.00m, 10.05GB read
  Socket errors: connect 0, read 0, write 0, timeout 309
Requests/sec:   1337.47
Transfer/sec:    171.30MB
```
