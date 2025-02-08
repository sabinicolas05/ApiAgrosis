import { client } from '../database/conexion.js';

export const ListarUserRol = async (req, res) => {
  try {
    const response = await client.query('SELECT * FROM "Users_rol";');
    if (response.rows.length > 0) {
      return res.status(200).json(response.rows);
    } else {
      return res.status(404).json({ message: "Rol de Usuario no encontrado" });
    }
  } catch (err) {
    console.error("Error al obtener datos:", err.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

export const BuscarUserRol = async (req, res) => {
  const UserRol_Id = req.params.id;

  try {
    const response = await client.query('SELECT * FROM "Users_rol" WHERE id = $1', [UserRol_Id]);
    if (response.rows.length > 0) {
      return res.status(200).json(response.rows[0]);
    } else {
      return res.status(404).json({ message: "Rol de Usuario no encontrado" });
    }
  } catch (err) {
    console.error("Error al obtener datos:", err.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

export const ActualizarUserRol = async (req, res) => {
  const UserRol_Id = req.params.id;
  const { tipo } = req.body;

  if (!tipo) {
    return res.status(400).json({ message: "El tipo es obligatorio" });
  }

  try {
    const sql = `
      UPDATE "Users_rol" 
      SET tipo = $1
      WHERE id = $2
      RETURNING *;
    `;
    const response = await client.query(sql, [tipo, UserRol_Id]);

    if (response.rows.length > 0) {
      return res.status(200).json({ message: "Rol de Usuario actualizado exitosamente", data: response.rows[0] });
    } else {
      return res.status(404).json({ message: "Rol de Usuario no encontrado" });
    }
  } catch (error) {
    console.error("Error al actualizar el Rol de Usuario:", error.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

export const RegistrarUserRol = async (req, res) => {
  try {
    const { tipo } = req.body;
    if (!tipo) {
      return res.status(400).json({ message: "El tipo es obligatorio" });
    }

    const sql = `
      INSERT INTO "Users_rol" (tipo) 
      VALUES ($1) 
      RETURNING *;
    `;
    const response = await client.query(sql, [tipo]);

    return res.status(201).json({ message: "Rol de Usuario registrado exitosamente", data: response.rows[0] });
  } catch (error) {
    console.error("Error al registrar el Rol de Usuario:", error.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

export const EliminarUserRol = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ message: "El ID es obligatorio" });
    }

    const sql = `
      DELETE FROM "Users_rol" 
      WHERE id = $1 
      RETURNING *;
    `;
    const response = await client.query(sql, [id]);

    if (response.rowCount > 0) {
      return res.status(200).json({ message: "Rol de Usuario eliminado exitosamente", data: response.rows[0] });
    } else {
      return res.status(404).json({ message: "Rol de Usuario no encontrado" });
    }
  } catch (error) {
    console.error("Error al eliminar el Rol de Usuario:", error.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};
