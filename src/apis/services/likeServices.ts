import Like from "../database/models/like.model";

export default class LikeServices{

    static create(data: any) {
        return Like.create(data);
      }
    
      static findAll() {
        return Like.findAll();
      }
    
      static findByPk(id: number) {
        return Like.findByPk(id);
      }
    
      static update(set: object, conditon: any) {
        return Like.update(set, {
          where: conditon,
          returning: true,
        }
        );
      }
    
      static destroy(condition: any) {
        return Like.destroy({
          where: condition,
        });
      }

}
