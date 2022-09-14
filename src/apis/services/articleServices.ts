import { FindAttributeOptions, WhereOptions } from 'sequelize/types';
import DB from 'apis/database';

const { Articles: Article, Users: User } = DB;

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
    autherAttributes?: FindAttributeOptions | undefined,
    limit?: number | undefined,
    offset?: number | undefined,
  ) {
    const { count, rows } = await Article.findAndCountAll({
      attributes,
      where,
      limit,
      offset,
      order: [['id', 'DESC']],
    });
    rows.sort((a: any, b: any) => Number(b.id) - Number(a.id));
    const articleRows = await Promise.all(
      rows.map(row => {
        return User.findByPk(row.toJSON()?.author_id, {
          attributes: autherAttributes,
        }).then(author => ({ author, ...row.toJSON() }));
      }),
    );
    return { count, rows: articleRows };
  }

  static async findOne(
    where?: WhereOptions<any> | undefined,
    attributes?: FindAttributeOptions | undefined,
    autherAttributes?: FindAttributeOptions | undefined,
  ) {
    const article: any = await Article.findOne({
      attributes,
      where,
    });
    const articleRows = await User.findByPk(
      article.toJSON()?.author_id,
      {
        attributes: autherAttributes,
      },
    ).then(author => ({ article, author }));

    return articleRows;
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
