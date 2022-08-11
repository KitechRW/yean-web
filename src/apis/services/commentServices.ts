import Comment from "../database/models/comment.model";

export default class CommentServices{

    static create(data: any) {
        return Comment.create(data);
      }
    
      static findAll() {
        return Comment.findAndCountAll();
      }
    
      static findByPk(id: number) {
        return Comment.findByPk(id);
      }
    
      static update(set: object, conditon: any) {
        return Comment.update(set, {
          where: conditon,
          returning: true,
        }
        );
      }

      static findAllByCondition(conditon: any) {
        return Comment.findAndCountAll({
          where: conditon,
        }
        );
      }
    
      static destroy(condition: any) {
        return Comment.destroy({
          where: condition,
        });
      }

}
