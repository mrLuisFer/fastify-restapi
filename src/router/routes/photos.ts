import {
  FastifyInstance,
  FastifyPluginAsync,
  FastifyReply,
  FastifyRequest,
} from 'fastify'
import { AutoloadPluginOptions } from 'fastify-autoload'
import { photosArray } from '../../utils/db/photos'

/**
 * @route GET /photos
 * @param {FastifyInstance} fastify Fastify Instance
 * @param {Partial<AutoloadPluginOptions>} opts Opts
 */
const photosRoute: FastifyPluginAsync = async (
  fastify: FastifyInstance,
  opts: Partial<AutoloadPluginOptions>,
): Promise<void> => {
  fastify.get(
    '/photos',
    async function (request: FastifyRequest, reply: FastifyReply) {
      reply
        .status(200)
        .header('Content-Type', 'application/json; charset=utf-8')
        .send(photosArray)
    },
  )
}

export default photosRoute
