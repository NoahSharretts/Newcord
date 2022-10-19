'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Servers', [
      {
        name: 'Demo Server',
        ownerId: 1,
        serverImg: 'https://i.imgur.com/4ZQZ1Zm.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Fake Server 2',
        ownerId: 1,
        serverImg: 'https://i.imgur.com/4ZQZ1Zm.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Servers', null, {
      truncate: true,
      cascade: true,
      restartIdentity: true
    });

  }
};
