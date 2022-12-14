module.exports = {
    up: (queryInterface, DataTypes) =>
      queryInterface.createTable('user', {
        id: {
          type: DataTypes.BIGINT,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
          unique: true,
        },
        type: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.TEXT,
        level: DataTypes.STRING,
        firstname: DataTypes.STRING,
        lastname: DataTypes.STRING,
        phone: DataTypes.STRING,
        gender: DataTypes.STRING,
        birthday: DataTypes.DATE,
        province: DataTypes.STRING,
        district: DataTypes.STRING,
        sector: DataTypes.STRING,
        agrilo: DataTypes.STRING,
        essay: DataTypes.TEXT,
        profile_image: DataTypes.TEXT,
        active: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        status: {
            type: DataTypes.INTEGER,
            comment: '0:offline,1:online',
            defaultValue: 0,
          },
        createdAt:{
            type:DataTypes.DATE,
            allowNull: false,
            defaultValue:DataTypes.NOW
        },
        updatedAt: {
            allowNull: false,
            type: DataTypes.DATE, 
            defaultValue:DataTypes.NOW
        }
      }),
    down: queryInterface => queryInterface.dropTable('user'),
  };
  