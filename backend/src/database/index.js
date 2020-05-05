import Sequelize from 'sequelize';

import databaseConfig from '../config/database';

import Supplier from '../app/models/Supplier';
import Product from '../app/models/Product';
import HappySet from '../app/models/HappySet';

const models = [Product, Supplier, HappySet];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }
}

export default new Database();
