---
title: 'NodeJs 16 Released - Will become LTS in October 2021'
slug: '/nodejs-16-released'
author: [Yuvaraj V]
tags: [nodejs, node16, javascript, v8, chrome, expressjs]
featuredImage: ../images/nodejs.png
date: '2021-04-25'
---


Node.js is a JavaScript platform that allow us to build backend applications quickly by leveraging JavaScript (v8 javascript engine at its core). 

I'm really excited to share that nodejs community releasing new version of nodejs (16) which will eventually become next LTS (Long Term supported) version in October 2021.

In this post, we are going to see what's new in this release..

- Updated Platform support
- V8 JavaScript Engine Version 9
- N-API Version 8
- Stable Timers Promises API
- Async Local Storage APIs

## Platform Support
The important update on platform support about this release (Node.js v16.x) is, this is the first release that ships prebuilt binaries for [Apple Silicon](https://en.wikipedia.org/wiki/Mac_transition_to_Apple_Silicon). 

While nodejs team will be providing separate tarballs for the Intel (darwin-x64) and ARM (darwin-arm64) architectures the macOS installer (.pkg) will be shipped as a ‘fat’ (multi-architecture) binary.

On Linux-based platforms, the minimum GCC level for building Node.js 16 will be GCC 8.3. Details about the supported toolchains and compilers are documented in the Node.js [BUILDING.md](https://github.com/nodejs/node/blob/v12.x/BUILDING.md#platform-list) file.

## V8 upgraded to V8 9.0
As usual the new version of nodejs includes latest version of v8 engine which comes with lots of improvements and latest Javascript features. In Node.js v16.0.0, the V8 engine is updated to V8 9.0 including performance tweaks and improvements.

You can find more about [v8 9.0 change log here](https://v8.dev/blog/v8-release-90)


## Node-API Version 8
Node-API (formerly N-API) is an API for building native Addons. It is independent from the underlying JavaScript runtime (for example, V8) and is maintained as part of Node.js itself. This API will be Application Binary Interface (ABI) stable across versions of Node.js. It is intended to insulate addons from changes in the underlying JavaScript engine and allow modules compiled for one major version to run on later major versions of Node.js without recompilation. 

In Node 16 node-api reached version 8. it means added more apis and useful utilities to write native addons..

You can learn more about it on [node-api docs](https://nodejs.org/api/n-api.html)

## Stable Timers Promises API

The Timers Promises API provides an alternative set of timer functions that return Promise objects. Added in Node.js v15.0.0, in this release they graduate from experimental status to stable.

You can now do this..
```js
import { setTimeout } from 'timers/promises';

(async () => {
    await setTimeout(5000);
    console.log('Hello, World!');
})();
```

## Some other notable changes..
- npm 7
- Experimental implementation of the standard [Web Crypto API](https://nodejs.org/api/webcrypto.html)
- Stable [AbortController](https://nodejs.org/api/globals.html#globals_class_abortcontroller) implementation based on the [AbortController Web API](https://developer.mozilla.org/en-US/docs/Web/API/AbortController)
- Stable Source Maps v3
- Web platform atob (buffer.atob(data)) and btoa (buffer.btoa(data)) implementations for compatibility with [legacy web platform APIs](https://nodejs.org/api/globals.html#globals_atob_data)


If you want to install and try multiple versions of nodejs in your system..
looks at this [post](https://opensourceinside.kodemonk.dev/2018/06/installing-multiple-versions-of-nodejs.html)


Want to learn / get start with nodejs check my [youtube channel](http://youtube.com/c/KodeMonk) 

`youtube: https://www.youtube.com/watch?v=yfWfh2ezUuE&list=PLUOHvKUkDFeEuUCLraDGtccDVqqNAahVZ`
