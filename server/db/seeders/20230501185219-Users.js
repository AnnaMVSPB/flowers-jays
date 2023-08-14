/** @type {import('sequelize-cli').Migration} */
const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'Anya',
        email: 'a@a',
        password: await bcrypt.hash('1234', 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Papa',
        email: 'p@p',
        password: await bcrypt.hash('1234', 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
