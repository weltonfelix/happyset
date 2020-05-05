import { Model } from 'sequelize';

class HappySet extends Model {
  static init(sequelize) {
    super.init(
      {},
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Product, {
      foreignKey: 'main_product',
      as: 'main_product_id',
    });
    this.belongsTo(models.Product, {
      foreignKey: 'product_01',
      as: 'product_01_id',
    });

    this.belongsTo(models.Product, {
      foreignKey: 'product_02',
      as: 'product_02_id',
    });

    this.belongsTo(models.Product, {
      foreignKey: 'product_03',
      as: 'product_03_id',
    });
  }
}

export default HappySet;
