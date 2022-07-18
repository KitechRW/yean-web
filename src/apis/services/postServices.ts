import Post from "../database/models/post.model";

export default class PostServices{

    static create(data: any) {
        return Post.create(data);
      }
    
      static findAll() {
        return Post.findAll();
      }
    
      static findByPk(id: number) {
        return Post.findByPk(id);
      }
    
      static update(set: object, conditon: any) {
        return Post.update(set, {
          where: conditon,
          returning: true,
        }
        );
      }
    
      static destroy(condition: any) {
        return Post.destroy({
          where: condition,
        });
      }

}
