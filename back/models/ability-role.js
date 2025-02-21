import { Sequelize, DataTypes, Model } from 'sequelize';
import {db as conexion}   from '../databases/connection.js'
'use strict';

export class AbilityRole extends Model{
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
  }
}

  AbilityRole.init({
    
    id_rol:{
      type: DataTypes.INTEGER,
      references: {
        model: 'role',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    id_ability: {
      type: DataTypes.INTEGER,
      references: {
        model: 'ability',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    }
  }, {
    sequelize:conexion,
   modelName: 'AbilityRole',
   paranoid: true, // Por si hacemos softdelete
   deletedAt: 'deletedAt',
   timestamps: true, 
  });

  export default AbilityRole;
  
