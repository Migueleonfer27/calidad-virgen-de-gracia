// Miguel, Gema y Daniel
import Users from "./user.js";
import Roles from "./role.js";
import UsersRoles from "./user-role.js";
import Category from "./category.js";
import Subcategory from "./subcategory.js";
import Document from "./document.js"
import TaskUser from "./task-user.js";
import Task from "./task.js";
import TaskDocument from "./task-document.js";
import Ability from "./ability.js";
import AbilityRole from "./ability-role.js";
import Message from "./message.js";


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

Subcategory.hasMany(Document, {
  as: 'documents',
  foreignKey: 'id_subcategory'

});

Document.belongsTo(Subcategory, {
  as: 'subcategory',
  foreignKey: 'id_subcategory'
})

Users.belongsToMany(Task, {
  through: TaskUser,
  foreignKey: "id_user",
  otherKey: "id_task",
});

Task.belongsToMany(Users, {
  through: TaskUser,
  foreignKey: "id_task",
  otherKey: "id_user",
});

Document.belongsToMany(Task, {
  through: TaskDocument,
  foreignKey: "id_document",
  otherKey: "id_task",
});

Task.belongsToMany(Document, {
  through: TaskDocument,
  foreignKey: "id_task",
  otherKey: "id_document",
});

Roles.belongsToMany(Ability, {
  through: AbilityRole,
  foreignKey: "id_rol",
  otherKey: "id_ability",
})

Ability.belongsToMany(Roles, {
  through: AbilityRole,
  foreignKey: "id_ability",
  otherKey: "id_rol",
})

// Relación: Un usuario tiene muchos mensajes como receptor
Users.hasMany(Message, {
  as: 'receivedMessages', // Mensajes recibidos
  foreignKey: 'userId',
});

// Relación: Un mensaje pertenece a un usuario (receptor)
Message.belongsTo(Users, {
  as: 'receiver', // Alias para el receptor
  foreignKey: 'userId',
});

// Relación: Un usuario tiene muchos mensajes como remitente
Users.hasMany(Message, {
  as: 'sentMessages', // Mensajes enviados
  foreignKey: 'senderId',
});

// Relación: Un mensaje pertenece a un usuario (remitente)
Message.belongsTo(Users, {
  as: 'sender', // Alias para el remitente
  foreignKey: 'senderId',
});

export { Users, Roles, UsersRoles, Category, Subcategory, Document, Task, TaskUser, TaskDocument, Ability, AbilityRole, Message };
