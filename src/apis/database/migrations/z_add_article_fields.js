/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('article', 'type', {
      type: Sequelize.ENUM('ARTICLE', 'EXTENSION_MATERIAL'),
      defaultValue: 'ARTICLE',
    });
    await queryInterface.addColumn('article', 'isSlide', {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    });
    await queryInterface.addColumn('article', 'slug', {
      type: Sequelize.TEXT('long'),
      allowNull: true,
    });
    await queryInterface.addColumn('article', 'category_id', {
      type: Sequelize.INTEGER,
      allowNull: true,
    })
    await queryInterface.addColumn('article', 'subcategory_id', {
      type: Sequelize.INTEGER,
      allowNull: true,
    })
    await queryInterface.addColumn('article', 'updated_at', {
      type: Sequelize.DATE,
      allowNull: true,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('article', 'type');
    await queryInterface.removeColumn('article', 'isSlide');
    await queryInterface.removeColumn('article', 'slug');
    await queryInterface.removeColumn('article', 'category_id');
    await queryInterface.removeColumn('article', 'subcategory_id');
    await queryInterface.removeColumn('article', 'updated_at');
  },
};
