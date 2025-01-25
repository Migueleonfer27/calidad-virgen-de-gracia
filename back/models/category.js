'use strict';
import { Sequelize, DataTypes, Model } from 'sequelize';

class Category extends Model{
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
    Sequelize,
    modelName: 'Category',
    paranoid: true, // Por si hacemos softdelete
    deletedAt: 'deletedAt',
    timestamps: true, 
  });
  return Category;

  export default Category;





