// next routes for dynamic routing
const routes = module.exports = require('next-routes')();

routes
  .add({ name: 'home', pattern: '/', page: 'home' })
  .add({ name: 'product', pattern: '/product/:slug', page: 'product'})