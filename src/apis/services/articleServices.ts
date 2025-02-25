import { FindAttributeOptions, WhereOptions } from 'sequelize/types';
import DB from 'apis/database';
import { convertToSlug } from 'system/format';

const { Articles: Article, Users: User, Categories, sequelize } = DB;

export default class ArticleServices {
  static async create(data: any) {
    await sequelize.transaction(async t => {
      const ArticleModel = Article;
      const article = await ArticleModel.create(data, {
        transaction: t,
      });
      article.set({
        slug: convertToSlug(
          article.toJSON().title,
          article.toJSON().id,
        ),
      });
      return await article.save({ transaction: t });
    });
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
      rows.map(async row => {
        const author = await User.findByPk(row.toJSON()?.author_id, {
          attributes: autherAttributes,
        });
        const category = await Categories.findByPk(
          row.toJSON().category_id,
        );
        const parentCategory = await Categories.findByPk(
          category?.toJSON()?.parent_id,
        );
        return {
          ...row.toJSON(),
          author,
          category: {
            ...category?.toJSON(),
            parent: parentCategory?.toJSON(),
          },
        };
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

    const author = await User.findByPk(article.toJSON()?.author_id, {
      attributes: autherAttributes,
    });
    const category = await Categories.findByPk(
      article.toJSON().category_id,
    );
    const parentCategory = await Categories.findByPk(
      category?.toJSON()?.parent_id,
    );

    return {
      ...article.toJSON(),
      author,
      category: {
        ...category?.toJSON(),
        parent: parentCategory?.toJSON(),
      },
    };
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
