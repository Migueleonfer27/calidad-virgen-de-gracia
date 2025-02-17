"use strict";

import { Sequelize, DataTypes, Model } from 'sequelize';
import { db as conexion } from '../databases/connection.js'


export class TaskDocument extends Model {
  static associate(models) { }
}
TaskDocument.init({
  id_task: {
    type: DataTypes.INTEGER,
    references: {
      model: 'tasks',
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
  id_document: {
    type: DataTypes.INTEGER,
    references: {
      model: 'documents',
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
  
}, {
  sequelize: conexion,
  modelName: 'TaskDocument',
  tableName: 'task_documents',
  paranoid: true, // Por si hacemos softdelete
  deletedAt: 'deletedAt',
  timestamps: true,
});

export default TaskDocument;
