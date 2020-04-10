import connection from '../../database/connection';
import crypto from 'crypto';

class NgoController {
  async index(request, response) {
    const ngos = await connection('ngos').select();
    return response.json(ngos);
  }

  async store(request, response) {
    const { name, email, whatsapp, city, uf } = request.body;
    const id = crypto.randomBytes(4).toString('HEX');

    await connection('ngos').insert({
      name, email, whatsapp, city, uf, id
    });

    return response.json({ id });
  }
}

export default new NgoController();