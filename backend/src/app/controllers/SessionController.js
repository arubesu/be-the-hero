import jwt from 'jsonwebtoken';
import Ngo from '../models/Ngo';

import authConfig from '../../config/auth';

class SessionController {
  async create(request, response) {
    const { email, password } = request.body;

    const ngo = await Ngo.findOne({ where: { email } });

    if (!ngo) {
      return response.status(400).json({ error: 'Email does not exist' })
    }

    if (!(await ngo.checkPassword(password))) {
      return response.status(401).json({ error: 'Password Invalid' });
    }

    const { id, name } = ngo;

    return response.json({
      user: {
        id,
        name,
        email
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn
      })
    });

  }
}

export default new SessionController();