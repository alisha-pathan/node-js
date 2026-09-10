# Node.js Learning Journey

A hands-on repository documenting my transition from frontend development to full-stack development, focused on learning **Node.js** from the ground up — starting with the core, dependency-free `http` module before moving into frameworks.

## About This Repo

I'm a frontend developer learning backend fundamentals in Node.js. This repo is where I build small servers and scripts to understand core concepts — HTTP servers, routing, modules, request/response handling — before relying on frameworks like Express. Every commit here reflects something new I've practiced.

For definitions and notes on individual concepts as I learn them, see [`LEARNING.md`](./LEARNING.md).

## Tech Stack

- **Runtime:** Node.js
- **Module system:** ES Modules (`"type": "module"`)
- **Core modules used so far:** `http`

## Project Structure

```
node-js/
├── index.js            # Entry point — HTTP server
├── postController.js   # Controller logic (in progress)
├── LEARNING.md          # Concept-by-concept learning notes
├── package.json
└── README.md
```

> Structure will evolve as more topics (routing, file system, streams, Express, etc.) are added.

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) installed (LTS recommended)

### Installation
```bash
git clone https://github.com/alisha-pathan/node-js.git
cd node-js
```

### Run the server
```bash
node index.js
```

The server will start on:
```
http://localhost:8000
```

## Current Progress

- [x] Create a basic HTTP server using the native `http` module
- [x] Understand `res.writeHead()` vs `res.setHeader()`
- [x] Send JSON responses with proper `Content-Type`
- [x] Import/export using ES Modules
- [ ] Add routing based on `req.url` and `req.method`
- [ ] Connect controller logic (`postController.js`) to routes
- [ ] Explore Express.js
- [ ] Learn middleware, REST APIs, and databases

## Notes

This is a learning repo, not a production project — code may be experimental, commented out, or reworked as understanding improves. That's the point.

## Author

**Alisha Pathan**
[GitHub](https://github.com/alisha-pathan)

## License

ISC
