import Ngo from '../models/Ngo'

class NgoController {
  async index(request, response) {
    const ngos = await Ngo.findAll({
      attributes: ['name', 'email', 'whatsapp', 'city', 'state']
    });
    return response.json(ngos);
  }

  async store(request, response) {
    const { id } = await Ngo.create(request.body);

    return response.json({ id });
  }
}

export default new NgoController();