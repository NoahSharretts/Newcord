'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Channels', [
      {
        name: 'Demo Channel 1',
        serverId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Fake Channel 2',
        serverId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Channels', null, {
      truncate: true,
      cascade: true,
      restartIdentity: true
    });

  }
};
