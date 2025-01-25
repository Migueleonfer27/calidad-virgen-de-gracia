import Users from "./user.js";
import Roles from "./role.js";
import UsersRoles from "./user-role.js";

Users.belongsToMany(Roles, {
  through: UsersRoles,
  foreignKey: "user_id",
  otherKey: "role_id",
});

Roles.belongsToMany(Users, {
  through: UsersRoles,
  foreignKey: "role_id",
  otherKey: "user_id",
});

export { Users, Roles, UsersRoles };
