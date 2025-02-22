//Gema

export const isRolValid = (permiso) => {
    return async (req, res, next) => {
      try {
        //0 no tiene token
        //1 no tiene las abilities adecuadas
        //2 problemas con la consulta de las abilities
        const rol = req.roles; 
        if (!id_rol) {
          return res.status(401).json({ cod: 0 });
        }
  
        const abilities = await connection_rol.getAbilities(id_rol);
        if (abilities.includes(permiso)) {
          return next();
        }
  
        return res.status(403).json({ cod:1 });
      } catch (error) {
        return res.status(500).json({ cod:2 });
      }
    };
  };