import connection from '../../database/connection';

class IncidenController {
  async store(request, response) {
    const { title, description, value } = request.body;
    const ngo_id = request.headers.authorization;

    const [id] = await connection('incidents').insert({
      ngo_id,
      title,
      description,
      value
    });

    return response.json({ id });
  }

  async index(request, response) {
    const { pageNumber = 1, pageSize = 5 } = request.query;

    const [count] = await connection('incidents').count();

    const incidents = await connection('incidents')
      .join('ngos', 'ngos.id', '=', 'incidents.ngo_id')
      .limit(pageSize)
      .offset((pageNumber - 1) * pageSize)
      .select(
        'incidents.*',
        'ngos.name',
        'ngos.email',
        'ngos.whatsapp',
        'ngos.city',
        'ngos.uf'
      );

    response.header('X-Total-Count', count['count(*)']);

    return response.json(incidents);
  }

  async delete(request, response) {
    const { id } = request.params;
    const ngo_id = request.headers.authorization;

    const incident = await connection('incidents')
      .where('id', id)
      .select('ngo_id')
      .first();

    if (!incident) {
      return response.status(400).json({ error: 'Invalid ID' });
    }

    if (incident.ngo_id !== ngo_id) {
      return response.status(401).json({ error: 'Operation Unauthorized' });
    }

    await connection('incidents')
      .where('id', id)
      .del();

    return response.status(204).send();
  }
}

export default new IncidenController();