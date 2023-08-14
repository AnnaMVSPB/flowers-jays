const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate({ User, Flower }) {
      this.belongsTo(User, { foreignKey: 'userIdComment' });
      this.belongsTo(Flower, { foreignKey: 'flowerIdComment' });
    }
  }
  Comment.init({

    flowerIdComment: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Flowers',
      },
      onDelete: 'CASCADE',
    },
    userIdComment: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
      },
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};
