"use strict";

import { DataTypes, Model } from "sequelize";
import sequelize from "../databases/connection.js";

class User extends Model {
  static associate(models) {}
}
User.init(
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
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nrp: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dni: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    abbreviation: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    birth_date: {
      type: DataTypes.DATE,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    postal_code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    province: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone_rp: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    specialty: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    department: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    admission_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    leave_date: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    corporate_email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "User",
    tableName: "users",
    paranoid: true,
    timestamps: true,
  }
);

export default User;
