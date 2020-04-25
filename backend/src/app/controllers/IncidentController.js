import Incidents from '../models/Incident'
import Ngos from '../models/Ngo'

class IncidentController {
  async store(request, response) {
    const { title, description, value } = request.body;

    const ngoId = request.userId;

    const incidents = await Incidents.create({
      ngo_id: ngoId,
      title,
      description,
      value,
    });

    return response.json({ createdId: incidents.id });
  }

  async index(request, response) {
    const { pageNumber = 1, pageSize = 5 } = request.query;

    const count = await Incidents.count();

    const incidents = await Incidents.findAll({
      attributes: [
        'id',
        'title',
        'description',
        'value',
      ],
      include: [{
        model: Ngos,
        attributes: [
          'name',
          'email',
          'whatsapp',
          'city',
          'state',
        ],
      }],
      offset: (pageNumber - 1) * pageSize, limit: pageSize
    })

    response.header('X-Total-Count', count);

    return response.json(incidents);
  }

  async delete(request, response) {
    const { id } = request.params;
    const ngoId = request.userId;

    const incident = await Incidents.findOne({
      where: {
        id,
      },
    });

    if (!incident) {
      return response.status(400).json({ error: 'Invalid ID' });
    }

    if (incident.ngo_id !== ngoId) {
      return response.status(401).json({ error: 'Operation Unauthorized' });
    }

    await Incidents.destroy({
      where: {
        id,
      },
    })

    return response.status(204).send();
  }
}

export default new IncidentController();