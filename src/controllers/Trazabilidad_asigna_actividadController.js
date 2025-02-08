import { client } from '../database/conexion.js';

export const ListarTrazAsigna = async (req, res) => {
  try {
    const response = await client.query('SELECT * FROM "Trazabilidad_asignacion_actividad";');
    if (response.rows.length > 0) {
      return res.status(200).json(response.rows);
    } else {
      return res.status(404).json({ message: "Actividades no encontradas" });
    }
  } catch (err) {
    console.error("Error al obtener datos:", err.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

export const BuscarTrazAsigna = async (req, res) => {
  const asigna_act_Id = req.params.id;
  try {
    const response = await client.query('SELECT * FROM "Trazabilidad_asignacion_actividad" WHERE id = $1', [asigna_act_Id]);
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

export const ActualizarTrazAsigna = async (req, res) => {
  const asigna_act_Id = req.params.id;
  const { fk_actividad_id, fk_inventario_id, fk_usuario_id } = req.body;

  if (!fk_actividad_id || !fk_inventario_id || !fk_usuario_id) {
    return res.status(400).json({ message: "El fk_actividad_id, fk_inventario_id y fk_usuario_id son obligatorios" });
  }

  try {
    const sql = `
      UPDATE "Trazabilidad_asignacion_actividad" 
      SET fk_actividad_id = $1, fk_inventario_id = $2, fk_usuario_id = $3
      WHERE id = $4
      RETURNING *;
    `;

    const response = await client.query(sql, [fk_actividad_id, fk_inventario_id, fk_usuario_id, asigna_act_Id]);
    if (response.rows.length > 0) {
      return res.status(200).json({ message: "Actividad actualizada exitosamente", data: response.rows[0] });
    } else {
      return res.status(404).json({ message: "Actividad no encontrada" });
    }
  } catch (error) {
    console.error("Error al actualizar la actividad:", error.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

export const RegistrarTrazAsigna = async (req, res) => {
  try {
    const { fk_actividad_id, fk_inventario_id, fk_usuario_id } = req.body;

    if (!fk_actividad_id || !fk_inventario_id || !fk_usuario_id) {
      return res.status(400).json({ message: "El fk_actividad_id, fk_inventario_id y fk_usuario_id son obligatorios" });
    }

    const sql = `
      INSERT INTO "Trazabilidad_asignacion_actividad" (fk_actividad_id, fk_inventario_id, fk_usuario_id) 
      VALUES ($1, $2, $3) 
      RETURNING *;
    `;

    const response = await client.query(sql, [fk_actividad_id, fk_inventario_id, fk_usuario_id]);
    return res.status(201).json({ message: "Actividad registrada exitosamente", data: response.rows[0] });
  } catch (error) {
    console.error("Error al registrar la actividad:", error.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

export const EliminarTrazAsigna = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ message: "El ID es obligatorio" });
    }

    const sql = `
      DELETE FROM "Trazabilidad_asignacion_actividad" 
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
