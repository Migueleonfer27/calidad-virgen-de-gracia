"use strict";

import { Sequelize, DataTypes, Model } from 'sequelize';
import { db as conexion } from '../databases/connection.js'


export class TaskUser extends Model {
  static associate(models) { }
}
TaskUser.init({
  id_task: {
    type: DataTypes.INTEGER,
    references: {
      model: 'tasks',
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
  id_user: {
    type: DataTypes.INTEGER,
    references: {
      model: 'users',
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  }
}, {
  sequelize: conexion,
  modelName: 'TaskUser',
  tableName: 'task_users',
  paranoid: true, // Por si hacemos softdelete
  deletedAt: 'deletedAt',
  timestamps: true,
});

export default TaskUser;
