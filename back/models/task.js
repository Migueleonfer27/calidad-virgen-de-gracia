"use strict";

import { Sequelize, DataTypes, Model } from 'sequelize';
import {db as conexion}   from '../databases/connection.js'


export class Task extends Model {
  static associate(models) {}
}
  Task.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    description: DataTypes.STRING,
    end_date:  DataTypes.DATE,
    
  }, {
   sequelize:conexion,
    modelName: 'Task',
    paranoid: true, // Por si hacemos softdelete
    deletedAt: 'deletedAt',
    timestamps: true, 
  });



  export default Task;