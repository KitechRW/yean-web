/** @type {import('sequelize-cli').Migration} */

module.exports = {
  up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.changeColumn(
        'user', // table name
        'password', // new field name
        {
          type: Sequelize.STRING,
        },
      ),
      // //-----
      queryInterface.changeColumn(
        'user', 
        'level',
         {
          allowNull: true,
          type: Sequelize.STRING,
        }
      ),
      queryInterface.changeColumn('user', 'firstname', {
        allowNull: true,
        type: Sequelize.STRING,
      }),
      queryInterface.changeColumn('user', 'lastname', {
        allowNull: true,
        type: Sequelize.STRING,
      }),
      queryInterface.changeColumn('user', 'phone', {
        allowNull: true,
        type: Sequelize.STRING,
      }),
      queryInterface.changeColumn('user', 'gender', {
        allowNull: true,
        type: Sequelize.STRING,
      }),
      queryInterface.changeColumn('user', 'birthday', {
        allowNull: true,
        type: Sequelize.STRING,
      }),
      queryInterface.changeColumn('user', 'province', {
        allowNull: true,
        type: Sequelize.STRING,
      }),
      queryInterface.changeColumn('user', 'district', {
        allowNull: true,
        type: Sequelize.STRING,
      }),
      queryInterface.changeColumn('user', 'sector', {
        allowNull: true,
        type: Sequelize.STRING,
      }),
      queryInterface.changeColumn('user', 'agripro', {
        allowNull: true,
        type: Sequelize.STRING,
      }),
      queryInterface.changeColumn('user', 'agrilo', {
        allowNull: true,
        type: Sequelize.STRING,
      }),
      queryInterface.changeColumn('user', 'essay', {
        allowNull: true,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('user', 'profile_image', {
        allowNull: true,
        type: Sequelize.STRING,
      }),
      // //======
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
          type: Sequelize.BOOLEAN,
          defaultValue: false,
        },
      ),
      queryInterface.addColumn(
        'user',
        'created_at',
        {
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW,
        },
      ),
      queryInterface.addColumn(
        'user',
        'updated_at',
        {
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW,
        },
      ),
    ]);
  },

  down(queryInterface, Sequelize) {
    // logic for reverting the changes
    return Promise.all([
      queryInterface.removeColumn('user', 'status'),
      queryInterface.removeColumn('user', 'active'),
      queryInterface.removeColumn('user', 'created_at'),
      queryInterface.removeColumn('user', 'updated_at'),
      queryInterface.changeColumn('user', 'password'),
        // //-----
      queryInterface.changeColumn('user', 'level'),
      queryInterface.changeColumn('user', 'firstname'),
      queryInterface.changeColumn('user', 'lastname'),
      queryInterface.changeColumn('user', 'phone'),
      queryInterface.changeColumn('user', 'gender'),
      queryInterface.changeColumn('user', 'birthday'),
      queryInterface.changeColumn('user', 'province'),
      queryInterface.changeColumn('user', 'district'),
      queryInterface.changeColumn('user', 'sector'),
      queryInterface.changeColumn('user', 'agripro'),
      queryInterface.changeColumn('user', 'agrilo'),
      queryInterface.changeColumn('user', 'essay'),
      queryInterface.changeColumn('user', 'profile_image'),
        // //======
      
    ]);
  },
};