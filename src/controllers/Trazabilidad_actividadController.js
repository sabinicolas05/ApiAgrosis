import { client } from '../database/conexion.js';

export const ListarTrazActividad = async (req, res) => {
  try {
    const response = await client.query('SELECT * FROM "Trazabilidad_actividad";');
    if (response.rows.length > 0) {
      return res.status(200).json(response.rows);
    } else {
      return res.status(404).json({ message: "Sensores no encontrados" });
    }
  } catch (err) {
    console.error("Error al obtener datos:", err.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

export const BuscarTrazActividad = async (req, res) => {
  const Actividad_id = req.params.id;

  try {
    const response = await client.query('SELECT * FROM "Trazabilidad_actividad" WHERE id = $1', [Actividad_id]);

    if (response.rows.length > 0) {
      return res.status(200).json(response.rows[0]);
    } else {
      return res.status(404).json({ message: "Actividad no encontrada" });
    }
  } catch (err) {
    console.error("Error al obtener datos:", err.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

export const ActualizarTrazActividad = async (req, res) => {
  const Actividad_id = req.params.id;

  const { descripcion, fecha_inicio, fecha_fin, estado, fk_usuario_id, fk_bancal_id } = req.body;

  if (!descripcion || !fecha_inicio || !fecha_fin || !estado || !fk_usuario_id || !fk_bancal_id) {
    return res.status(400).json({ message: "El descripcion, fecha_inicio, fecha_fin y estado, fk_usuario_id, fk_bancal_id son obligatorios" });
  }

  try {
    const sql = `
      UPDATE "Trazabilidad_actividad" 
      SET descripcion = $1, fecha_inicio = $2, fecha_fin = $3, estado = $4, fk_usuario_id = $5, fk_bancal_id = $6
      WHERE id = $7 
      RETURNING *;
    `;

    const response = await client.query(sql, [descripcion, fecha_inicio, fecha_fin, estado, fk_usuario_id, fk_bancal_id, Actividad_id]);

    if (response.rows.length > 0) {
      return res.status(200).json({ message: "Actividad actualizada exitosamente", data: response.rows[0] });
    } else {
      return res.status(404).json({ message: "Actividad no encontrada" });
    }
  } catch (error) {
    console.error("Error al actualizar el sensor:", error.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

export const RegistrarTrazActividad = async (req, res) => {
  try {
    const { descripcion, fecha_inicio, fecha_fin, estado, fk_usuario_id, fk_bancal_id } = req.body;

    if (!descripcion || !fecha_inicio || !fecha_fin || !estado || !fk_usuario_id || !fk_bancal_id) {
      return res.status(400).json({ message: "El descripcion, fecha_inicio, fecha_fin y estado, fk_usuario_id, fk_bancal_id son obligatorios" });
    }

    const sql = `
      INSERT INTO "Trazabilidad_actividad" (descripcion, fecha_inicio, fecha_fin, estado, fk_usuario_id, fk_bancal_id) 
      VALUES ($1, $2, $3, $4, $5, $6) 
      RETURNING *;
    `;

    const response = await client.query(sql, [descripcion, fecha_inicio, fecha_fin, estado, fk_usuario_id, fk_bancal_id]);

    return res.status(201).json({ message: "Actividad registrada exitosamente", data: response.rows[0] });
  } catch (error) {
    console.error("Error al registrar la actividad:", error.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

export const EliminarTrazActividad = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "El ID es obligatorio" });
    }

    const sql = `
      DELETE FROM "Trazabilidad_actividad" 
      WHERE id = $1 
      RETURNING *;
    `;

    const response = await client.query(sql, [id]);

    if (response.rowCount > 0) {
      return res.status(200).json({ message: "Actividad eliminada exitosamente", data: response.rows[0] });
    } else {
      return res.status(404).json({ message: "Actividad no encontrada" });
    }
  } catch (error) {
    console.error("Error al eliminar la actividad:", error.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};
