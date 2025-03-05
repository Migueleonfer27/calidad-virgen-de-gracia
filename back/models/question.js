'use strict';

import { DataTypes, Model } from 'sequelize';
import { db as conexion } from '../databases/connection.js'

export class Question extends Model {
  static associate(models) { }
}
Question.init({
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  text: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  sequelize: conexion,
  modelName: 'Question',
  tableName: 'questions',
  paranoid: true,
  deletedAt: 'deletedAt',
  timestamps: true,
})

export default Question