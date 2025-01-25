"use strict";

import { DataTypes, Model } from "sequelize";
import sequelize from "../databases/connetion.js";

class UserRole extends Model {
  static associate(models) {}
}
UserRole.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "UserRole",
    tableName: "users_roles",
    timestamps: true,
    paranoid: true,
  }
);

export default UserRole;
