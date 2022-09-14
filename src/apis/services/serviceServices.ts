import DB from 'apis/database';

const { Services: Service } = DB;
export default class ServiceServices{

    static create(data: any) {
        return Service.create(data);
      }
    
      static findAll() {
        return Service.findAll();
      }
    
      static findByPk(id: number) {
        return Service.findByPk(id);
      }
    
      static update(set: object, conditon: any) {
        return Service.update(set, {
          where: conditon,
          returning: true,
        }
        );
      }
    
      static destroy(condition: any) {
        return Service.destroy({
          where: condition,
        });
      }

}
