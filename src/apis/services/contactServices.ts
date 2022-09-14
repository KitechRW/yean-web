import DB from 'apis/database';

const { Contacts: Contact } = DB;

export default class ContactService {
  
    static create(data: any) {
    return Contact.create(data);
  }

  static findAll() {
    return Contact.findAll();
  }

  static findByPk(id: any) {
    return Contact.findByPk(id);
  }

  static update(set: object, conditon: any) {
    return Contact.update(set, {
      where: conditon,
    });
  }

  static destroy(condition: any) {
    return Contact.destroy({
      where: condition,
    });
  }
  
}
