---
title: 'A New Async Key-Value (Local)Storage for Web (KV Storage)'
slug: '/new-async-kv-storage-for-web'
author: [Yuvaraj V]
tags: [keyvalue-store, async-storage, js, web, web-storage, KV-Storage]
featuredImage: ../images/keyvalue-async-store.png
date: '2021-04-27'
---

We all know that **WebStorage (LocalStorage / SessionStorage) API** is one of the simple and easy ways to store and retrieve data from the user's browser using JavaScript.

Unfortunately, there is a major drawback in the WebStorage API. As it will store and retrieve data synchronously **(Blocking)**.

There is an alternative available to store/retrieve data Asynchronously **(Non-blocking)** using JavaScript. That is **IndexedDB**.

**IndexedDB** is asynchronous, efficient and we can store a lot more than what we can do using LocalStorage API *but its API and syntax are not so simple to use*. You have to deal with dozens of callbacks and events.

But there is a *new, easy, and efficient* to use **Async Key-Value Storage(KV storage)** API proposed by Web Incubator Community Group (WICG) which uses IndexedDB as its storage backend. You can find more details about this spec [here](https://github.com/WICG/kv-storage)

The new KV Storage implements a simple LocalSorage like API as shown in below code snippet

```js
(async () => {

  await kvStorage.set('mycat', 'Tom');
  console.assert(
      await kvStorage.get('mycat') === 'Tom'
  );

  for await (const [key, value] of kvStorage.entries()) {
    console.log(key, value);
  }
  // Logs 'mycat', 'Tom'

  await kvStorage.delete('mycat');
  console.assert(
      await kvStorage.get('mycat') === undefined
  );
})();
```
As of writing this article work on this specification is suspended, as no browser teams (including the Chromium project, which originated the proposal) are currently indicating interest in implementing it.

However, there is a super-simple-small promise-based [keyval store](https://www.npmjs.com/package/idb-keyval) (Js library) implemented with IndexedDB by [Mozilla](https://github.com/mozilla) which accounts less than 600 bytes. Also, it's tree-shaking friendly.


```js
import { set, get } from 'idb-keyval';

set('hello', 'world')
  .then(() => console.log('It worked!'))
  .catch(err => console.log('It failed!', err));

get('hello').then(val => console.log(val));
```

if you want broader support to cover old implementations of IndexedDB and other edge cases you can use localForage which accounts for less than 10KB to your total bundle size.

You can use localForage in your next angular project through this npm [@ngx-pwa/local-storage](https://github.com/cyrilletuzi/angular-async-local-storage)

You can also try this new shiny KV Storage using [kv-storage-polyfill](https://github.com/GoogleChromeLabs/kv-storage-polyfill) by [GoogleChromeLabs](https://github.com/GoogleChromeLabs)


Originally published on [dev.to](https://dev.to/shivarajnaidu/a-new-async-key-value-local-storage-for-web-jb)
