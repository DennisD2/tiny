# What is this?

Tiny Node.js/Express application like 'Hello World'.

In fact it implements a web server class (named App) that serves static file. See file src/App.ts .

It uses Express to serve static files located in src/static.
Furthermore Winston is used to do logging.

# How do I start this?

// cd to tiny's root directory, this is the directory where file package.json is located.

// install all required modules
npm install

// make build, this sets up all files required in /dist directory
npm run-script build

// start the app
npm start

