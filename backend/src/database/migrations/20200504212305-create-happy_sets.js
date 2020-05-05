module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('happy_sets', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      main_product: {
        type: Sequelize.INTEGER,
        references: { model: 'products', key: 'id' },
        onUptade: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
      },
      product_01: {
        type: Sequelize.INTEGER,
        reference: { model: 'products', key: 'id' },
        onUptade: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
      },
      product_02: {
        type: Sequelize.INTEGER,
        reference: { model: 'products', key: 'id' },
        onUptade: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
      },
      product_03: {
        type: Sequelize.INTEGER,
        reference: { model: 'products', key: 'id' },
        onUptade: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('happy_sets');
  },
};
