import { Model, DataTypes } from 'sequelize';
import { sequelize } from "../database/";


class User extends Model {}
  User.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique: true
  },
  email: {
    type: DataTypes.STRING,
    unique: true
  },
  password: DataTypes.STRING,
  fullname: DataTypes.STRING,
  id_role:{
    type: DataTypes.INTEGER,  
    defaultValue: 2
  },
  token: DataTypes.STRING
}, {
    sequelize,
    modelName: "user"
});

export default User;
