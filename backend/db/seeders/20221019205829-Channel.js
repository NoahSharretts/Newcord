'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Channels', [
      {
        name: 'Demo Channel 1',
        serverId: 1,
      },
      {
        name: 'Fake Channel 2',
        serverId: 2,
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
