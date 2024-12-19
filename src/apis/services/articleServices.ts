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
    const ArticleModel = Article ;
    if (data.slug) {
      data.slug = convertToSlug(data.slug);
    }
    console.log(data);
    return ArticleModel.create(data);
  }

  static findAll() {
    const ArticleModel = Article ;
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
        return Author.findByPk(row.toJSON()?.author_id, {
          attributes: autherAttributes,
        })
          .then(author => {
            if (!author) {
              return User.findByPk(row.toJSON()?.author_id, {
                attributes: autherAttributes,
              }).then(author => ({ author, ...row.toJSON() }));
            }
            return { author, ...row.toJSON() };
          })
          .then((articleData: any) => {
            const categoryId = articleData.category_name;
            if (categoryId) {
              return Categories.findByPk(categoryId).then(
                category => ({
                  category: category?.toJSON(),
                  ...articleData,
                }),
              );
            }
            return articleData;
          })
          .then((articleData: any) => {
            const subcategoryId = articleData.subcategory_name;
            if (subcategoryId) {
              return SubCategories.findByPk(subcategoryId).then(
                subcategory => ({
                  subcategory: subcategory?.toJSON(),
                  ...articleData,
                }),
              );
            }
            return articleData;
          });
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
    const views = article.toJSON().views;
    if (views >= 0) {
      article.set({
        views: article.toJSON().views + 1,
      });
      await article.save();
    }
    const articleData = await Author.findByPk(
      article.toJSON()?.author_id,
      {
        attributes: autherAttributes,
      },
    )
      .then(author => {
        if (!author) {
          return User.findByPk(article.toJSON()?.author_id, {
            attributes: autherAttributes,
          }).then(author => ({ author, ...article.toJSON() }));
        }
        return { author, ...article.toJSON() };
      })
      .then((articleData: any) => {
        const categoryId = articleData.category_name;
        if (categoryId) {
          return Categories.findByPk(categoryId).then(category => ({
            category: category?.toJSON(),
            ...articleData,
          }));
        }
        return articleData;
      })
      .then((articleData: any) => {
        const subcategoryId = articleData.subcategory_name;
        if (subcategoryId) {
          return SubCategories.findByPk(subcategoryId).then(
            subcategory => ({
              subcategory: subcategory?.toJSON(),
              ...articleData,
            }),
          );
        }
        return articleData;
      });

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
