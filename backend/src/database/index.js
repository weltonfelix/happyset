import Sequelize from 'sequelize';

import Supplier from '../app/models/Supplier';

import Product from '../app/models/Product';

import databaseConfig from '../config/database';

const models = [Supplier, Product];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map((model) => model.init(this.connection));
  }
}

export default new Database();
