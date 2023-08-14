/** @type {import('sequelize-cli').Migration} */
const data = require('../flowersArr');

module.exports = {
  async up(queryInterface) {
    const arrFlowers = data.map((el) => (
      {
        ...el,
        createdAt: new Date(),
        updatedAt: new Date(),
      }));
    await queryInterface.bulkInsert('Flowers', arrFlowers, {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Flowers', null, {});
  },
};
