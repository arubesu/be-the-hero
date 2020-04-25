import Incident from '../models/Incident';

class ProfileController {
  async index(request, response) {
    const { userId } = request;

    const incidents = await Incident.findAll({
      where: { ngo_id: userId }
    });

    return response.json({ incidents });
  }
}

export default new ProfileController();