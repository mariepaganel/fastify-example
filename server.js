// Require the framework and instantiate it
// CommonJs
const fastify = require('fastify')({
  logger: true
})


// Import the route
const exampleRoute = require('./routes/exampleRoute');

// Declare a route
fastify.get('/', function (request, reply) {
  reply.send({ hello: 'world' })
})

// Register the example route
fastify.register(exampleRoute);

// Run the server!
fastify.listen({ port: 3000 }, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  // Server is now listening on ${address}
})
