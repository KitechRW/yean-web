module.exports = {
  up: (queryInterface, DataTypes) =>
    queryInterface.createTable('tbl_category', {
      id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
      },
      name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      image: DataTypes.STRING,
    }),
  down: queryInterface => queryInterface.dropTable('tbl_category'),
};
