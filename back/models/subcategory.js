'use strict';
import { Sequelize, DataTypes, Model } from 'sequelize';

class Subcategory extends Model{
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
  }
}
Subcategory.init({
  id:{
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  name: DataTypes.STRING,
  id_category: {
    type: DataTypes.BIGINT,
    references: {
      model: 'Category',
      key: 'id'
    }
  }
}, {
  Sequelize,
  modelName: 'Subcategory',
  paranoid: true, // Por si hacemos softdelete
  deletedAt: 'deletedAt',
  timestamps: true, 
});
return Subcategory;

export default Subcategory;
