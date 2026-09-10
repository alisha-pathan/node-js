
---

## Entries
<!-- Newest entries go right below this line -->

### `server.listen()`

**Definition:**
The method that actually starts the HTTP server and makes it listen for incoming requests on a given port (and optionally a host). Until `.listen()` is called, `http.createServer()` has only created the server object — it isn't accepting connections yet. Takes an optional callback that runs once the server is up.

**Why it matters:**
Easy to forget this step and wonder why nothing responds — creating the server and starting it are two separate steps.

**Example:**
```js
server.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
```

**Related to:** `http.createServer()`

---

### `req` and `res` objects

**Definition:**
The two objects passed into the `http.createServer()` callback on every request.
- `req` (IncomingMessage) — represents the incoming request. Carries info like `req.url`, `req.method`, `req.headers`.
- `res` (ServerResponse) — used to build and send the response back. Has methods like `res.setHeader()`, `res.writeHead()`, `res.end()`.

**Why it matters:**
Almost everything in a raw Node server — routing, reading data, sending responses — happens by reading `req` and calling methods on `res`.

**Example:**
```js
const server = http.createServer((req, res) => {
  console.log(req.method, req.url); // read from req
  res.writeHead(200, { 'Content-Type': 'application/json' }); // write to res
  res.end(JSON.stringify({ ok: true }));
});
```

**Related to:** `http.createServer()`, `res.writeHead()` vs `res.setHeader()`

---

### `global` vs `window`, `process` vs `document`

**Definition:**
In the browser, `window` is the global object, and `document` gives access to the DOM. Node has no browser and no DOM, so there's no `document` object. Instead:
- `global` is Node's global object (equivalent role to `window`).
- `process` gives info about and control over the currently running Node process — things like environment variables (`process.env`), command-line args (`process.argv`), and exiting the process (`process.exit()`).

**Why it matters:**
Coming from frontend, it's easy to assume browser globals exist everywhere. Node's environment is a different runtime with its own globals suited to server/CLI work, not a webpage.

**Example:**
```js
console.log(process.version); // Node version
console.log(process.argv);    // command-line arguments
```

**Related to:** JavaScript engines

---

### JavaScript Engines (V8, SpiderMonkey, JavaScriptCore)

**Definition:**
Every browser (and runtime) that executes JavaScript does so through an "engine" — a program that parses and runs JS code. Firefox uses **SpiderMonkey**, Safari uses **JavaScriptCore**, and Chrome (and Node.js) uses **V8**, which is written in C++.

**Why it matters:**
Node.js is essentially the V8 engine embedded inside a C++ program, plus extra APIs (`http`, `fs`, `process`, etc.) that a browser doesn't provide. This is why Node isn't just "JavaScript running outside the browser" — it's a different host environment built around the same engine family as Chrome.

**Example:**
_No code — conceptual note._
`V8 (Chrome, Node) · SpiderMonkey (Firefox) · JavaScriptCore (Safari)`

**Related to:** `global` vs `window`

---

### `http.createServer()`

**Definition:**
Built-in Node.js method (from the `http` core module) that creates an HTTP server. It takes a callback function that runs every time a request hits the server, receiving `req` (request) and `res` (response) objects.

**Why it matters:**
It's the foundation of how Node handles web servers without any framework — understanding this makes frameworks like Express feel less "magic."

**Example:**
```js
import http from 'http';

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ message: 'Hello' }));
});

server.listen(8000);
```

**Related to:** `req`/`res` objects, event loop

---

### `res.writeHead()` vs `res.setHeader()`

**Definition:**
Both set response headers, but `writeHead(statusCode, headers)` sets the status code AND headers together in one call, while `setHeader(name, value)` sets one header at a time and needs the status code set separately (or defaults to 200).

**Why it matters:**
Once headers are sent, they can't be changed — so knowing which method locks things in when is important for avoiding "headers already sent" errors.

**Example:**
```js
// Option A
res.writeHead(404, { 'Content-Type': 'application/json' });

// Option B
res.setHeader('Content-Type', 'application/json');
res.statusCode = 404;
```

**Related to:** `http.createServer()`

---

### ES Modules (`import`/`export`) vs CommonJS (`require`)

**Definition:**
Two module systems in Node.js. CommonJS uses `require()`/`module.exports` (older, default). ES Modules use `import`/`export` (modern, standard JS) and require `"type": "module"` in `package.json` or a `.mjs` extension.

**Why it matters:**
Mixing the two causes errors — need to pick one per project and know which one you're in.

**Example:**
```js
// ES Module
import http from 'http';
export const obj = { post: 'hello' };

// CommonJS (old syntax, for reference)
const http = require('http');
module.exports = { obj };
```

**Related to:** `package.json` config

---
