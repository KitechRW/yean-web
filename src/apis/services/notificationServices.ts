import DB from 'apis/database';

const { Notifications: Notification } = DB;

export default class NotificationServices{

    static create(data: any) {
        return Notification.create(data);
      }
    
      static findAll() {
        return Notification.findAll();
      }
    
      static findByPk(id: number) {
        return Notification.findByPk(id);
      }
    
      static update(set: object, conditon: any) {
        return Notification.update(set, {
          where: conditon,
          returning: true,
        }
        );
      }
    
      static destroy(condition: any) {
        return Notification.destroy({
          where: condition,
        });
      }

}
