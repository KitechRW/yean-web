import Library from "../database/models/library.model";

export default class LibraryServices{

    static create(data: any) {
        return Library.create(data);
      }
    
      static findAll() {
        return Library.findAll();
      }
    
      static findByPk(id: number) {
        return Library.findByPk(id);
      }
    
      static update(set: object, conditon: any) {
        return Library.update(set, {
          where: conditon,
          returning: true,
        }
        );
      }
    
      static destroy(condition: any) {
        return Library.destroy({
          where: condition,
        });
      }

}
