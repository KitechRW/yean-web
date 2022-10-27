import { DataTypes, Model, Sequelize } from 'sequelize';

class Author extends Model {}

const AuthorModel = (sequelize: Sequelize) => {
  Author.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      firstname: DataTypes.STRING,
      lastname: DataTypes.STRING,
      profile_image: DataTypes.TEXT,
    },
    {
      tableName: 'authors',
      modelName: 'Author',
      timestamps: true,
      sequelize,
    },
  );

  return Author;
};

export default AuthorModel;
