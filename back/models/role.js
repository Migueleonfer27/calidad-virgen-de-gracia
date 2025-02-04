"use strict";

import { DataTypes, Model } from "sequelize";
import sequelize from "../databases/connection.js";

class Role extends Model {
  static associate(models) {}
}
Role.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    code: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    position: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    sequelize,
    modelName: "Role",
    tableName: "roles",
    timestamps: true,
    paranoid: true,
  }
);

export default Role;
