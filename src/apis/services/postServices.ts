import DB from 'apis/database';

const { Posts: Post } = DB;
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
