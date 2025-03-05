'use strict';

import { DataTypes, Model } from 'sequelize';
import { db as conexion } from '../databases/connection.js'

export class Survey extends Model {
  static associate(models) { }
}
Survey.init({
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  page_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.BIGINT,
    allowNull: true,
    references: {
      model: 'User',
      key: 'id',
    }
  },
  final_score: {
    type: DataTypes.FLOAT,
    allowNull: true,
  }
}, {
  sequelize: conexion,
  modelName: 'Survey',
  tableName: 'surveys',
  paranoid: true,
  deletedAt: 'deletedAt',
  timestamps: true,
})

export default Survey