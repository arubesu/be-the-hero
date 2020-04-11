import Sequelize, { Model } from 'sequelize';

class Incident extends Model {
  static init(sequelize) {
    super.init({
      title: Sequelize.STRING,
      description: Sequelize.STRING,
      value: Sequelize.DECIMAL
    }, { sequelize });

    return this;
  }
}

export default Incident;