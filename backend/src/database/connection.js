import Sequelize from 'sequelize';

import Incident from '../app/models/Incident'
import Ngo from '../app/models/Ngo'

import databaseConfig from '../config/database';

const models = [Incident, Ngo];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
  }

}

export default new Database();