import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';
import Incidents from './Incident'

class Ngo extends Model {
  static init(sequelize) {
    super.init({
      name: Sequelize.STRING,
      email: Sequelize.STRING,
      whatsapp: Sequelize.STRING,
      city: Sequelize.STRING,
      state: Sequelize.STRING,
      password: Sequelize.VIRTUAL,
      password_hash: Sequelize.STRING
    }, { sequelize });

    this.addHook('beforeSave', async (ngo) => {
      if (ngo.password) {
        ngo.password_hash = await bcrypt.hash(ngo.password, 10)
      }
    });

    this.hasMany(Incidents, { foreignKey: 'ngo_id', sourceKey: 'id' })
    Incidents.belongsTo(Ngo), { foreignKey: 'id' };

    return this;
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}

export default Ngo;