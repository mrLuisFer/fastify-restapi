const photos = require('../utils/db/photos')

/**
 *
 * @route GET /photos
 * @param {Request} req
 * @param {Reply} reply
 */
module.exports = (req, reply) => {
  console.log(reply)
  reply
    .code(200)
    .header('Content-Type', 'application/json; charset=utf-8')
    .send(photos)
}