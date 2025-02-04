'use strict';
import { Sequelize, DataTypes, Model } from 'sequelize';
import {db as conexion}   from '../databases/connection.js'

export class Document extends Model{

  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
  }
}
  Document.init({
    id:{
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    code: DataTypes.STRING,
    url: DataTypes.STRING,
    id_subcategory: {
      type: DataTypes.BIGINT,
      references: {
        model: 'Document',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    }
  }, {
    sequelize:conexion,
   modelName: 'Document',
   paranoid: true, // Por si hacemos softdelete
   deletedAt: 'deletedAt',
   timestamps: true, 
 });
 
  
 export default Document;