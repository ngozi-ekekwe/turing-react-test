const express = require('express');
const nextJs = require('next')
const helmet  = require('helmet')
const routes = require('./src/routes')

const dev = process.env.NODE_ENV !== 'production';
const port = parseInt(process.env.PORT, 10) || 3000;

const server = express();
const app = nextJs({ dev, dir: './src' });
const appHandler = routes.getRequestHandler(app, ({req, res, route, query}) => {
  app.render(req, res, route.page, query)
});

// Security setup
server.use(helmet());
server.use(helmet.referrerPolicy({ policy: 'origin-when-cross-origin' }));


app.prepare().then(() => {

  // Web app routes
  server.use(appHandler);
  // Listen on port
  server.listen(port, (err) => {
    if (err) {
      throw err;
    }
    console.info(`> Ready http://localhost:${port} <`);
  });
}).catch((ex) => {
  console.error(ex.stack);
  process.exit(1);
});
