module.exports = {
  up: (queryInterface, DataTypes) =>
    queryInterface.createTable('tbl_landing', {
      id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
      },
      slideIds: {
        type: DataTypes.JSON,
      },
    }),
  down: queryInterface => queryInterface.dropTable('tbl_landing'),
};
