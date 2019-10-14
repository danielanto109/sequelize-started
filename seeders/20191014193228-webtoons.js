'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('webtoons', [
      {
        img_banner: 'https://via.placeholder.com/1080',
        title: 'Webtoon 1',
        description: 'Barton waited twenty always repair in within we do.',
        favorite_count: 42,
        create_by:1
      },
      {
        img_banner: 'https://via.placeholder.com/1020',
        title: 'Webtoon 2',
        description: 'Sudden she seeing garret far regard. By hardly it direct if pretty up regret.',
        favorite_count: 1,
        create_by:1
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('webtoons', null, {});
  }
};
