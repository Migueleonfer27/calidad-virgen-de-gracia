import { Sequelize, DataTypes, Model } from 'sequelize';
import {db as conexion}   from '../databases/connection.js'
'use strict';

export class Ability extends Model{
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
  }
}


Ability.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  description: DataTypes.STRING
}, {
  sequelize:conexion,
  modelName: 'Ability',
  paranoid: true, // Por si hacemos softdelete
  deletedAt: 'deletedAt',
  timestamps: true, 
});

export default Ability;