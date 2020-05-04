import Sequelize, { Model } from 'sequelize';

class Product extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        description: Sequelize.TEXT,
        price: Sequelize.DECIMAL(10, 2),
        amount: Sequelize.INTEGER,
        supplier: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );
    return this;
  }
}

export default Product;
