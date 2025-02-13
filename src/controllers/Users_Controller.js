import { client } from '../database/conexion.js';

export const ListarUser = async (req, res) => {
  try {
    const response = await client.query(`
      SELECT id, first_name, last_name, username, identificacion, telefono, email, password, 
             is_superuser, fk_rol_id, is_staff, is_active 
      FROM "Users_usuario";
    `);
    
    return response.rows.length > 0
      ? res.status(200).json(response.rows)
      : res.status(404).json({ message: "Usuarios no encontrados" });

  } catch (err) {
    console.error("Error al obtener usuarios:", err.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

export const BuscarUser = async (req, res) => {
  const UserRol_Id = req.params.id;

  try {
    const response = await client.query(`
      SELECT id, first_name, last_name, username, identificacion, telefono, email, password, 
             is_superuser, fk_rol_id, is_staff, is_active 
      FROM "Users_usuario" WHERE fk_rol_id = $1;
    `, [UserRol_Id]);

    return response.rows.length > 0
      ? res.status(200).json(response.rows)
      : res.status(404).json({ message: "Usuarios no encontrados con ese rol" });

  } catch (err) {
    console.error("Error al obtener usuarios por rol:", err.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

export const ActualizarUser = async (req, res) => {
  const UserRol_Id = req.params.id;
  const { first_name, last_name, username, identificacion, telefono, email, password, is_superuser, fk_rol_id, is_staff, is_active } = req.body;

  if (!first_name || !last_name || !username || !identificacion || !telefono || !email || !password || is_superuser === undefined || !fk_rol_id || is_staff === undefined || is_active === undefined) {
    return res.status(400).json({ message: "Todos los campos son obligatorios" });
  }

  try {
    const sql = `
      UPDATE "Users_usuario" 
      SET first_name = $1, last_name = $2, username = $3, identificacion = $4, telefono = $5, email = $6, password = $7, 
          is_superuser = $8, fk_rol_id = $9, is_staff = $10, is_active = $11
      WHERE id = $12
      RETURNING *;
    `;

    const response = await client.query(sql, [first_name, last_name, username, identificacion, telefono, email, password, is_superuser, fk_rol_id, is_staff, is_active, UserRol_Id]);

    return response.rows.length > 0
      ? res.status(200).json({ message: "Usuario actualizado exitosamente", data: response.rows[0] })
      : res.status(404).json({ message: "Usuario no encontrado" });

  } catch (error) {
    console.error("Error al actualizar el usuario:", error.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

export const RegistrarUser = async (req, res) => {
  try {
    const { first_name, last_name, username, identificacion, telefono, email, password, is_superuser, fk_rol_id, is_staff, is_active } = req.body;

    if (!first_name || !last_name || !username || !identificacion || !telefono || !email || !password || is_superuser === undefined || !fk_rol_id || is_staff === undefined || is_active === undefined) {
      return res.status(400).json({ message: "Todos los campos son obligatorios" });
    }

    const sql = `
      INSERT INTO "Users_usuario" (first_name, last_name, username, identificacion, telefono, email, password, is_superuser, fk_rol_id, is_staff, is_active) 
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
      RETURNING *;
    `;

    const response = await client.query(sql, [first_name, last_name, username, identificacion, telefono, email, password, is_superuser, fk_rol_id, is_staff, is_active]);

    return res.status(201).json({ message: "Usuario registrado exitosamente", data: response.rows[0] });

  } catch (error) {
    console.error("Error al registrar el usuario:", error.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

export const EliminarUser = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "El ID es obligatorio" });
    }

    const sql = `DELETE FROM "Users_usuario" WHERE id = $1 RETURNING *;`;
    const response = await client.query(sql, [id]);

    return response.rowCount > 0
      ? res.status(200).json({ message: "Usuario eliminado exitosamente", data: response.rows[0] })
      : res.status(404).json({ message: "Usuario no encontrado" });

  } catch (error) {
    console.error("Error al eliminar el usuario:", error.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};
