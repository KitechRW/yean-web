import DB from 'apis/database';

const { Pictures: Picture } = DB;

export default class PictureServices{

    static create(data: any) {
        return Picture.create(data);
      }
    
      static findAll() {
        return Picture.findAll();
      }
    
      static findByPk(id: number) {
        return Picture.findByPk(id);
      }
    
      static update(set: object, conditon: any) {
        return Picture.update(set, {
          where: conditon,
          returning: true,
        }
        );
      }
    
      static destroy(condition: any) {
        return Picture.destroy({
          where: condition,
        });
      }

}
