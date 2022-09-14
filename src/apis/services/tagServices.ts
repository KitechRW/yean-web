import DB from 'apis/database';

const { Tags: Tag } = DB;
export default class TagServices{

    static create(data: any) {
        return Tag.create(data);
      }
    
      static findAll() {
        return Tag.findAll();
      }
    
      static findByPk(id: number) {
        return Tag.findByPk(id);
      }
    
      static update(set: object, conditon: any) {
        return Tag.update(set, {
          where: conditon,
          returning: true,
        }
        );
      }
    
      static destroy(condition: any) {
        return Tag.destroy({
          where: condition,
        });
      }

}
