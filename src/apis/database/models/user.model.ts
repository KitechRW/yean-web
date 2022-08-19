import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize';
import Article from './article.model';
import Like from './like.model';
import Picture from './picture.model';
import Post from './post.model';

const User = sequelize.define(
  'User',
  {
    type: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
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
    profile_image: DataTypes.STRING,
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    status: {
      type: DataTypes.INTEGER,
      comment: '0:offline,1:online',
      defaultValue: 0,
    },
  },
  {
    tableName: 'user',
    timestamps: false,
  },
);

(async () => {
  await sequelize.sync({ alter: false });
  User.hasMany(Article, {
    foreignKey: {
      name: 'author_id',
    },
  });

  User.hasMany(Like, {
    foreignKey: {
      name: 'user',
    },
  });

  User.hasOne(Picture, {
    foreignKey: {
      name: 'user',
    },
  });

  User.hasMany(Post, {
    foreignKey: {
      name: 'user',
    },
  });
})();

export default User;
