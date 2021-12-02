import * as fastify_ from 'fastify'

const fastify = fastify_.default({
  http2: true,
  logger: true,
})

fastify.get('/', async () => 'hi')
;(async () => {
  try {
    await fastify.listen(58080, '::')
  } catch (error) {
    fastify.log.error(error)
    process.exit(1)
  }
})()
