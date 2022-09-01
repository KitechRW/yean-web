import Library from "../database/models/library.model";
import { FindAttributeOptions, WhereOptions } from 'sequelize/types';

export default class LibraryServices{

    static create(data: any) {
        return Library.create(data);
      }
    
      static findAll() {
        return Library.findAll();
      }
      static async findAndCountAll(
        where?: WhereOptions<any> | undefined,
        attributes?: FindAttributeOptions | undefined,
        limit?: number | undefined,
        offset?: number | undefined,
      ) {
        const { count, rows } = await Library.findAndCountAll({
          attributes,
          where,
          limit,
          offset,
        });
        return { count, rows };
      }
    
      static findByPk(id: any) {
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

      static findByCondition(condition: any) {
        return Library.findOne({
          where: condition,
        });
      }

}
