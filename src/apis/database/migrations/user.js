/** @type {import('sequelize-cli').Migration} */

module.exports = {
  up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'user', // table name
        'status', // new field name
        {
          type: Sequelize.INTEGER,
          comment: '0:offline,1:online',
          defaultValue: 0,
        },
      ),
      queryInterface.addColumn(
        'user',
        'active',
        {
          type: DataTypes.BOOLEAN,
          defaultValue: false,
        },
      ),
    ]);
  },

  down(queryInterface, Sequelize) {
    // logic for reverting the changes
    return Promise.all([
      queryInterface.removeColumn('user', 'status'),
      queryInterface.removeColumn('user', 'active'),
    ]);
  },
};