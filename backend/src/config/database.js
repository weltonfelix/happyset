const { resolve } = require('path');

module.exports = {
  dialect: 'sqlite',
  storage: resolve(__dirname, '..', 'database', 'db.sqlite'),
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
