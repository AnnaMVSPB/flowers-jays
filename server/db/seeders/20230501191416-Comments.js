/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Comments', [
      {
        flowerIdComment: 3,
        userIdComment: 2,
        title: 'а я бы хотела такого себе)',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        flowerIdComment: 4,
        userIdComment: 2,
        title: 'ох ничего себе у меня квартира меньше чем этот шланг',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Comments', null, {});
  },
};
