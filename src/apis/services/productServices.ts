import Product from "../database/models/product.model";

export default class ProductServices{

    static create(data: any) {
        return Product.create(data);
      }
    
      static findAll() {
        return Product.findAll();
      }
    
      static findByPk(id: number) {
        return Product.findByPk(id);
      }
    
      static update(set: object, conditon: any) {
        return Product.update(set, {
          where: conditon,
          returning: true,
        }
        );
      }
    
      static destroy(condition: any) {
        return Product.destroy({
          where: condition,
        });
      }

}
