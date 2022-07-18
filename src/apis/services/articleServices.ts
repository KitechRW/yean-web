import Article from "../database/models/article.model";

export default class ArticleServices{

    static create(data: any) {
        return Article.create(data);
      }
    
      static findAll() {
        return Article.findAll();
      }
    
      static findByPk(id: number) {
        return Article.findByPk(id);
      }
    
      static update(set: object, conditon: any) {
        return Article.update(set, {
          where: conditon,
          returning: true,
        }
        );
      }
    
      static destroy(condition: any) {
        return Article.destroy({
          where: condition,
        });
      }

}
