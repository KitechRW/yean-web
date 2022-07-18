import Post_comment from "../database/models/post_comment.model";

export default class Post_commentServices{

    static create(data: any) {
        return Post_comment.create(data);
      }
    
      static findAll() {
        return Post_comment.findAll();
      }
    
      static findByPk(id: number) {
        return Post_comment.findByPk(id);
      }
    
      static update(set: object, conditon: any) {
        return Post_comment.update(set, {
          where: conditon,
          returning: true,
        }
        );
      }
    
      static destroy(condition: any) {
        return Post_comment.destroy({
          where: condition,
        });
      }

}
