const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Flower extends Model {
    static associate({ User, Like, Comment }) {
      this.belongsTo(User, { foreignKey: 'userId' });
      this.hasMany(Like, { foreignKey: 'flowerIdLike' });
      this.hasMany(Comment, { foreignKey: 'flowerIdComment' });
    }
  }
  Flower.init({
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
      },
      onDelete: 'CASCADE',
    },
    url: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Flower',
  });
  return Flower;
};
