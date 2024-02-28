# JS Fundamentals

- The programs in this language are called scripts.
- Scripts are provided and executed as plain text.
- They don’t need special preparation or compilation to run.

## JS Engines

- Today JS can run on anything that has a JS engine
- Old JS engines are mere interpreters
- Modenr engines use just-in-time compilation for improved performance
- Every web-browser vendor has its own JS engine
- Еhe V8 engine is a core component of the Node.js and Deno runtime systems

### How engine works:

1. The engine (embedded if it’s a browser) reads (“parses”) the script.
2. Then it converts (“compiles”) the script to machine code.
3. And then the machine code runs, pretty fast.

The engine applies optimizations at each step of the process. It even watches the compiled script as it runs, analyzes the data that flows through it, and further optimizes the machine code based on that knowledge.
