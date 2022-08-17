import User from 'apis/database/models/user.model';
import { FindAttributeOptions, WhereOptions } from 'sequelize/types';
import Article from '../database/models/article.model';

export default class ArticleServices {
  static create(data: any) {
    return Article.create(data);
  }

  static findAll() {
    return Article.findAll();
  }

  static async findAndCountAll(
    where?: WhereOptions<any> | undefined,
    attributes?: FindAttributeOptions | undefined,
  ) {
    const { count, rows } = await Article.findAndCountAll({
      attributes,
      where,
    });
    const articleRows = await Promise.all(
      rows.map(row => {
        return User.findByPk(row.toJSON()?.auther_id).then(
          auther => ({ auther, ...row.toJSON() }),
        );
      }),
    );
    return { count, rows: articleRows };
  }

  static findByPk(id: number) {
    return Article.findByPk(id);
  }

  static update(set: object, conditon: any) {
    return Article.update(set, {
      where: conditon,
      returning: true,
    });
  }

  static destroy(condition: any) {
    return Article.destroy({
      where: condition,
    });
  }
}
