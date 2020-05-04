import Sequelize, { Model } from 'sequelize';

class Supplier extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        latitude: Sequelize.STRING,
        longitude: Sequelize.STRING,
      },
      {
        sequelize,
        tableName: 'suppliers',
      }
    );

    return this;
  }
}

export default Supplier;
