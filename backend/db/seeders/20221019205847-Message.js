'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Messages', [
      {
        body: 'Hello World',
        channelId: 1,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ], {});

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Messages', null, {
      truncate: true,
      cascade: true,
      restartIdentity: true
    });

  }
};
