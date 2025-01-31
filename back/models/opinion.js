//Javier
import { Sequelize, DataTypes, Model } from 'sequelize';
import {db as conexion}   from '../databases/connection.js';

'use strict';

  export class Opinion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Opinion.init({
    id:{
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    score: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'Opinion',
  });
  export default Opinion;