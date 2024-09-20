// routes/exampleRoute.js
async function exampleRoute(fastify, options) {
  fastify.get('/example', async (request, reply) => {
    return { message: 'This is an example route!' };
  });
}

module.exports = exampleRoute;
