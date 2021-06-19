import { Model, DataTypes } from 'sequelize';
import { sequelize } from "../database/";


class Order extends Model {}
  Order.init({
  idOrder: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  status: DataTypes.STRING,
  paymentMethod: DataTypes.STRING,
  totalOrder: DataTypes.FLOAT,
  subOrder: DataTypes.FLOAT,
  discount: DataTypes.FLOAT,
  discountCoupon: DataTypes.STRING,
  customerName: DataTypes.STRING,
  tel: DataTypes.STRING,
  infoDeliver: DataTypes.STRING
}, {
    sequelize,
    modelName: "order"
});

export default Order;

