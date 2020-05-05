import Sequelize, { Model } from 'sequelize';

class Product extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        description: Sequelize.TEXT,
        categories: Sequelize.STRING,
        price: Sequelize.DECIMAL(10, 2),
        image: Sequelize.STRING,
        amount: Sequelize.INTEGER,
      },
      {
        sequelize,
        tableName: 'products',
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Supplier, {
      foreignKey: 'supplier_id',
      as: 'suppliers',
    });
  }
}

export default Product;
