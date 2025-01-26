"use strict";

import { DataTypes, Model } from "sequelize";
import sequelize from "../databases/connetion.js";
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
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
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
