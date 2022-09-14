import { Sequelize, Model, DataTypes } from 'sequelize';

class Like extends Model {}

const LikeModel = (sequelize: Sequelize) => {
  Like.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      user: DataTypes.BIGINT,
      post: DataTypes.BIGINT,
      likes: DataTypes.BOOLEAN,
    },
    {
      tableName: 'like',
      timestamps: true,
      sequelize,
    },
  );
  return Like;
};

export default LikeModel;
