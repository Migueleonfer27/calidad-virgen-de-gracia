// Jaime Ortega
import jwt from "jsonwebtoken";

export const generateJWT = (uid = "") => {
  let token = jwt.sign({ uid }, process.env.SECRETORPRIVATEKEY, {
    expiresIn: "4h",
  });
  return token;
};

export const generateJWT_roles = (uid = "", roles = []) => {
  let token = jwt.sign({ uid, roles }, process.env.SECRETORPRIVATEKEY, {
    expiresIn: "4h",
  });
  return token;
};

export const generateJWT_rolesTest = (uid = "", roles = []) => {
  const formattedRoles = roles.map((role) => ({
    role_id: role.id || 1,
    position: role.position || role,
  }));

  let token = jwt.sign(
    { uid, roles: formattedRoles },
    process.env.SECRETORPRIVATEKEY,
    { expiresIn: "4h" }
  );

  return token;
};
