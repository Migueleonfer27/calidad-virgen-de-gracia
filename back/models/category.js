'use strict';
import { Sequelize, DataTypes, Model } from 'sequelize';
import {db as conexion}   from '../databases/connection.js';
export class Category extends Model{
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Category.init({
    id:{
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,

  }, {
    sequelize:conexion,
    modelName: 'Category',
    paranoid: true, // Por si hacemos softdelete
    deletedAt: 'deletedAt',
    timestamps: true, 
  });
 

  export default Category;





