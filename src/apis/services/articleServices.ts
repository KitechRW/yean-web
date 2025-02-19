import { FindAttributeOptions, WhereOptions } from 'sequelize/types';
import DB from 'apis/database';
import { convertToSlug } from 'system/format';

const {
  Articles: Article,
  Users: User,
  Author,
  Categories,
  SubCategories,
} = DB;

export default class ArticleServices {
  static create(data: any) {
    const ArticleModel = Article;
    if (data.slug) {
      data.slug = convertToSlug(data.slug);
    }

    return ArticleModel.create(data);
  }

  static findAll() {
    const ArticleModel = Article;
    return ArticleModel.findAll();
  }

  static async findAndCountAll(
    where?: WhereOptions<any> | undefined,
    attributes?: FindAttributeOptions | undefined,
    autherAttributes?: FindAttributeOptions | undefined,
    limit?: number | undefined,
    offset?: number | undefined,
  ) {
    const ArticleModel = Article;
    const { count, rows } = await ArticleModel.findAndCountAll({
      attributes,
      where,
      limit,
      offset,
      order: [['id', 'DESC']],
    });
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
    const ArticleModel = Article;
    const article = await ArticleModel.findOne({
      attributes,
      where,
    });
    if (!article) {
      return null;
    }

    const articleData = await User.findByPk(
      article.toJSON()?.author_id,
      {
        attributes: autherAttributes,
      },
    ).then(author => ({ author, ...article.toJSON() }));

    return articleData;
  }

  static findByPk(id: number) {
    const ArticleModel = Article;
    return ArticleModel.findByPk(id);
  }

  static update(set: object, conditon: any) {
    const ArticleModel = Article;
    return ArticleModel.update(set, {
      where: conditon,
      returning: true,
    });
  }

  static destroy(condition: any) {
    const ArticleModel = Article;
    return ArticleModel.destroy({
      where: condition,
    });
  }
}
