import Subscribe from 'apis/database/models/subscriber.model';

export default class SubscribeService {
  
    static create(data: any) {
    return Subscribe.create(data);
  }

  static findAll() {
    return Subscribe.findAll();
  }

  static findByPk(id: number) {
    return Subscribe.findByPk(id);
  }

  static findByEmail(email: string) {
    return Subscribe.findOne({ where: { email } });
  }

  static update(set: object, conditon: any) {
    return Subscribe.update(set, {
      where: conditon,
    });
  }

  static destroy(condition: any) {
    return Subscribe.destroy({
      where: condition,
    });
  }
  
}
