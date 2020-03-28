const connection = require('../../database/connection');
const crypto = require('crypto');

module.exports = {

  async index(request, response) {
    const ngos = await connection('ngos').select();
    return response.json(ngos);
  },

  async store(request, response) {
    const { name, email, whatsapp, city, uf } = request.body;
    const id = crypto.randomBytes(4).toString('HEX');

    await connection('ngos').insert({
      name, email, whatsapp, city, uf, id
    });

    return response.json({ id });
  }
}

