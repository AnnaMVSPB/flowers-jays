const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Flower, Like, Comment }) {
      this.hasMany(Flower, { foreignKey: 'userId' });
      this.hasMany(Like, { foreignKey: 'userIdLike' });
      this.hasMany(Comment, { foreignKey: 'userIdComment' });
    }
  }
  User.init({
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
