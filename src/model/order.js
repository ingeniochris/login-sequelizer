import Sequelize from 'sequelize';
import database from '../database/connection';

var Order = database.define('order', {
  idOrder: {
    type: database.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  status: database.STRING,
  paymentMethod: database.STRING,
  totalOrder: database.FLOAT,
  subOrder: database.FLOAT,
  discount: database.FLOAT,
  discountCoupon: database.STRING,
  customerName: database.STRING,
  tel: database.STRING,
  infoDeliver: database.STRING
});

export default Order