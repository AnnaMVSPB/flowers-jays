const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Like extends Model {
    static associate({ User, Flower }) {
      this.belongsTo(User, { foreignKey: 'userIdLike' });
      this.belongsTo(Flower, { foreignKey: 'flowerIdLike' });
    }
  }
  Like.init({
    flowerIdLike: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Flowers',
      },
      onDelete: 'CASCADE',
    },
    userIdLike: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
      },
    },
  }, {
    sequelize,
    modelName: 'Like',
  });
  return Like;
};
