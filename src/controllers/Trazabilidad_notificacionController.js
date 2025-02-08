import { client } from '../database/conexion.js';

export const ListarTrazNotificacion = async (req, res) => {
  try {
    const response = await client.query('SELECT * FROM "Trazabilidad_notificacion";');
    if (response.rows.length > 0) {
      return res.status(200).json(response.rows);
    } else {
      return res.status(404).json({ message: "Notificacion no encontrados" });
    }
  } catch (err) {
    console.error("Error al obtener datos:", err.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

export const BuscarTrazNotificacion = async (req, res) => {
  const Notificacion_id = req.params.id;
  try {
    const response = await client.query('SELECT * FROM "Trazabilidad_notificacion" WHERE id = $1', [Notificacion_id]);
    if (response.rows.length > 0) {
      return res.status(200).json(response.rows[0]);
    } else {
      return res.status(404).json({ message: "Notificacion no encontrado" });
    }
  } catch (err) {
    console.error("Error al obtener datos:", err.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

export const ActualizarTrazNotificacion = async (req, res) => {
  const Notificacion_id = req.params.id;
  const { nombre, descripcion, fecha_hora, fk_actividad_id, fk_usuario_id } = req.body;
  if (!nombre || !descripcion || !fecha_hora || !fk_actividad_id || !fk_usuario_id) {
    return res.status(400).json({ message: "El nombre, descripcion, fecha_hora, fk_actividad_id, fk_usuario_id son obligatorios" });
  }
  try {
    const sql = `
      UPDATE "Trazabilidad_notificacion" 
      SET nombre = $1, descripcion = $2, fecha_hora = $3, fk_actividad_id = $4, fk_usuario_id = $5
      WHERE id = $6
      RETURNING *;
    `;
    const response = await client.query(sql, [nombre, descripcion, fecha_hora, fk_actividad_id, fk_usuario_id, Notificacion_id]);
    if (response.rows.length > 0) {
      return res.status(200).json({ message: "Notificacion actualizada exitosamente", data: response.rows[0] });
    } else {
      return res.status(404).json({ message: "Notificacion no encontrada" });
    }
  } catch (error) {
    console.error("Error al actualizar la Notificacion:", error.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

export const RegistrarTrazNotificacion = async (req, res) => {
  try {
    const { nombre, descripcion, fecha_hora, fk_actividad_id, fk_usuario_id } = req.body;
    if (!nombre || !descripcion || !fecha_hora || !fk_actividad_id || !fk_usuario_id) {
      return res.status(400).json({ message: "El nombre, descripcion, fecha_hora, fk_actividad_id, fk_usuario_id son obligatorios" });
    }
    const sql = `
      INSERT INTO "Trazabilidad_notificacion" (nombre, descripcion, fecha_hora, fk_actividad_id, fk_usuario_id) 
      VALUES ($1, $2, $3, $4, $5) 
      RETURNING *;
    `;
    const response = await client.query(sql, [nombre, descripcion, fecha_hora, fk_actividad_id, fk_usuario_id]);
    return res.status(201).json({ message: "Notificacion registrada exitosamente", data: response.rows[0] });
  } catch (error) {
    console.error("Error al registrar la notificacion:", error.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

export const EliminarTrazNotificacion = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ message: "El ID es obligatorio" });
    }
    const sql = `
      DELETE FROM "Trazabilidad_notificacion" 
      WHERE id = $1 
      RETURNING *;
    `;
    const response = await client.query(sql, [id]);
    if (response.rowCount > 0) {
      return res.status(200).json({ message: "Notificacion eliminada exitosamente", data: response.rows[0] });
    } else {
      return res.status(404).json({ message: "Notificacion no encontrada" });
    }
  } catch (error) {
    console.error("Error al eliminar la Notificacion:", error.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};
