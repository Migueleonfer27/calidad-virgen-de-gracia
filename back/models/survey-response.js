'use strict';

import { DataTypes, Model } from 'sequelize';
import { db as conexion } from '../databases/connection.js'

export class SurveyResponse extends Model {
  static associate(models) { }
}
SurveyResponse.init({
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  survey_id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    references: {
      model: 'Survey',
      key: 'id'
    }
  },
  question_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Question',
      key: 'id'
    }
  },
  answer: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1,
      max: 5,
    }
  }
}, {
  sequelize: conexion,
  modelName: 'SurveyResponse',
  tableName: 'survey_responses',
  paranoid: true,
  deletedAt: 'deletedAt',
  timestamps: true,
})

export default SurveyResponse