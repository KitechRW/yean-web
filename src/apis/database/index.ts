import Sequelize from 'sequelize';
import dotenv from 'dotenv';
import TagModel from './models/tags.model';
import ArticleModel from './models/article.model';
import CategoryModel from './models/category.model';
import CommentModel from './models/comment.model';
import ContactModel from './models/contact.model';
import JobModel from './models/jobs.model';
import LandingModel from './models/landing.model';
import LibraryModel from './models/library.model';
import LikeModel from './models/like.model';
import NotificationModel from './models/notification.model';
import PartnerModel from './models/partner.model';
import PictureModel from './models/picture.model';
import Post_commentModel from './models/post_comment.model';
import PostModel from './models/post.model';
import ServiceModel from './models/services.model';
import SubCategoryModel from './models/subcategory.model';
import UserModel from './models/user.model';
import SubscribeModel from './models/subscriber.model';
import ProjectModel from './models/project.model';
import InnovationModel from './models/innovation';
import AboutModel from './models/about';
import TeamModel from './models/team';
import MaterialModel from './models/material.model';
import AuthorModel from './models/author.model';
import MemberArticlesModel from './models/memberArticle.model';

dotenv.config();

const isProduction = process.env.NODE_ENV === 'production';

export const sequelize = isProduction ? new Sequelize.Sequelize(
    `${process.env.DATABASE_URL}`,
  {
    dialect: 'mysql',
    timezone: '+09:00',
    define: {
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci',
      underscored: true,
      freezeTableName: true,
    },
    pool: {
      min: 0,
      max: 5,
    },
    logging: false,
    logQueryParameters: process.env.NODE_ENV !== 'production',
    benchmark: true,
    // dialectOptions: {
    //   ssl: {
    //     require: true,
    //     rejectUnauthorized: false,
    //   },
    // },
  },
): new Sequelize.Sequelize(
  process.env.DB_NAME || 'yeanrwanda', // Default to local DB
  process.env.DB_USER || 'root',
  process.env.DB_PASSWORD || 'password',
  {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql',
    timezone: '+09:00',
    define: {
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci',
      underscored: true,
      freezeTableName: true,
    },
    pool: {
      min: 0,
      max: 5,
    },
    logging: false,
    logQueryParameters: process.env.NODE_ENV !== 'production',
    benchmark: true,
  }
); 

sequelize.authenticate().then(() => {
  console.log('Database Connected successfully')
}).catch((err:Error) => {
    console.error('Unable to connect To database');
});

const DB = {
  Author: AuthorModel(sequelize),
  Material: MaterialModel(sequelize),
  Team: TeamModel(sequelize),
  About: AboutModel(sequelize),
  Innovation: InnovationModel(sequelize),
  Articles: ArticleModel(sequelize),
  Categories: CategoryModel(sequelize),
  Comments: CommentModel(sequelize),
  Contacts: ContactModel(sequelize),
  Jobs: JobModel(sequelize),
  Landings: LandingModel(sequelize),
  Libraries: LibraryModel(sequelize),
  Likes: LikeModel(sequelize),
  Notifications: NotificationModel(sequelize),
  Partners: PartnerModel(sequelize),
  Pictures: PictureModel(sequelize),
  PostComments: Post_commentModel(sequelize),
  Posts: PostModel(sequelize),
  Services: ServiceModel(sequelize),
  SubCategories: SubCategoryModel(sequelize),
  Subscribes: SubscribeModel(sequelize),
  Tags: TagModel(sequelize),
  Users: UserModel(sequelize),
  Projects: ProjectModel(sequelize),
  MemberArticles: MemberArticlesModel(sequelize),

  sequelize, // connection instance (RAW queries)
};

(async () => {
  await sequelize.sync({
    force: false,
    alter: false, //process.env.NODE_ENV !== 'production',
  });
  // code
})();

export default DB;
