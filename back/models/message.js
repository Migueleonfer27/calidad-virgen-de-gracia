// Daniel Cruz
'use strict';
import { DataTypes, Model } from 'sequelize';
import { db as conexion } from '../databases/connection.js';

export class Message extends Model{

  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
  }
}
  Message.init({
    id:{
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    subject: DataTypes.STRING,
    message: DataTypes.STRING,
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    }
  }, {
    sequelize:conexion,
   modelName: 'Message',
   tableName: 'messages',
   paranoid: true, 
   deletedAt: 'deletedAt',
   timestamps: true, 
 });
 
  
 export default Message;