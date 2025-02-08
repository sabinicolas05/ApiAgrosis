import { client } from '../database/conexion.js';

export const ListarTrazControl = async (req, res) => {
  try {
    const response = await client.query('SELECT * FROM "Trazabilidad_control";');
    if (response.rows.length > 0) {
      return res.status(200).json(response.rows);
    } else {
      return res.status(404).json({ message: "Control no encontrados" });
    }
  } catch (err) {
    console.error("Error al obtener datos:", err.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

export const BuscarTrazControl = async (req, res) => {
  const Control_id = req.params.id;
  try {
    const response = await client.query('SELECT * FROM "Trazabilidad_control" WHERE id = $1', [Control_id]);
    if (response.rows.length > 0) {
      return res.status(200).json(response.rows[0]);
    } else {
      return res.status(404).json({ message: "Control no encontrado" });
    }
  } catch (err) {
    console.error("Error al obtener datos:", err.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

export const ActualizarTrazControl = async (req, res) => {
  const Control_id = req.params.id;
  const { fecha_hora, descripcion, fk_afeccion_id, fk_cultivo_id } = req.body;
  if (!fecha_hora || !descripcion || !fk_afeccion_id || !fk_cultivo_id) {
    return res.status(400).json({ message: "El fecha_hora, descripcion, fk_afeccion_id, fk_cultivo_id son obligatorios" });
  }
  try {
    const sql = `
      UPDATE "Trazabilidad_control" 
      SET fecha_hora = $1, descripcion = $2, fk_afeccion_id = $3, fk_cultivo_id = $4
      WHERE id = $5
      RETURNING *;
    `;
    const response = await client.query(sql, [fecha_hora, descripcion, fk_afeccion_id, fk_cultivo_id, Control_id]);
    if (response.rows.length > 0) {
      return res.status(200).json({ message: "Control actualizado exitosamente", data: response.rows[0] });
    } else {
      return res.status(404).json({ message: "Control no encontrado" });
    }
  } catch (error) {
    console.error("Error al actualizar el control:", error.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

export const RegistrarTrazControl = async (req, res) => {
  try {
    const { fecha_hora, descripcion, fk_afeccion_id, fk_cultivo_id } = req.body;
    if (!fecha_hora || !descripcion || !fk_afeccion_id || !fk_cultivo_id) {
      return res.status(400).json({ message: "El fecha_hora, descripcion, fk_afeccion_id, fk_cultivo_id son obligatorios" });
    }
    const sql = `
      INSERT INTO "Trazabilidad_control" (fecha_hora, descripcion, fk_afeccion_id, fk_cultivo_id) 
      VALUES ($1, $2, $3, $4) 
      RETURNING *;
    `;
    const response = await client.query(sql, [fecha_hora, descripcion, fk_afeccion_id, fk_cultivo_id]);
    return res.status(201).json({ message: "Control registrado exitosamente", data: response.rows[0] });
  } catch (error) {
    console.error("Error al registrar el Control:", error.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

export const EliminarTrazControl = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ message: "El ID es obligatorio" });
    }
    const sql = `
      DELETE FROM "Trazabilidad_control" 
      WHERE id = $1 
      RETURNING *;
    `;
    const response = await client.query(sql, [id]);
    if (response.rowCount > 0) {
      return res.status(200).json({ message: "Control eliminado exitosamente", data: response.rows[0] });
    } else {
      return res.status(404).json({ message: "Control no encontrado" });
    }
  } catch (error) {
    console.error("Error al eliminar el control:", error.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};
