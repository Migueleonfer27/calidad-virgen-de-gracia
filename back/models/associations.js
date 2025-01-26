import Users from "./user.js";
import Roles from "./role.js";
import UsersRoles from "./user-role.js";
import Category from "./category.js";
import Subcategory from "./subcategory.js";

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

// Relación: Una categoría tiene una o muchas subcategorías
Category.hasMany(Subcategory, {
  as: 'subcategories',
  foreignKey: 'id_category'
});

// Relación: Una subcategoría pertenece a una categoría
Subcategory.belongsTo(Category, {
  as: 'category',
  foreignKey: 'id_category'
})

export { Users, Roles, UsersRoles, Category, Subcategory };
