import { client } from '../database/conexion.js';

export const ListarTrazBancal = async (req, res) => {
  try {
    const response = await client.query('SELECT * FROM "Trazabilidad_bancal";');
    if (response.rows.length > 0) {
      return res.status(200).json(response.rows);
    } else {
      return res.status(404).json({ message: "Bancal no encontrados" });
    }
  } catch (err) {
    console.error("Error al obtener datos:", err.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

export const BuscarTrazBancal = async (req, res) => {
  const Bancal_Id = req.params.id;

  try {
    const response = await client.query('SELECT * FROM "Trazabilidad_bancal" WHERE id = $1', [Bancal_Id]);

    if (response.rows.length > 0) {
      return res.status(200).json(response.rows[0]);
    } else {
      return res.status(404).json({ message: "Bancal no encontrado" });
    }
  } catch (err) {
    console.error("Error al obtener datos:", err.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

export const ActualizarTrazBancal = async (req, res) => {
  const Bancal_Id = req.params.id;
  const { nombre, descripcion, ubicacion, fk_cultivo_id, fk_lote_id } = req.body;

  if (!nombre || !descripcion || !ubicacion || !fk_cultivo_id || !fk_lote_id) {
    return res.status(400).json({ message: "El nombre, descripcion, ubicacion, fk_cultivo_id y fk_lote_id son obligatorios" });
  }

  try {
    const sql = `
      UPDATE "Trazabilidad_bancal" 
      SET nombre = $1, descripcion = $2, ubicacion = $3, fk_cultivo_id = $4, fk_lote_id = $5
      WHERE id = $6
      RETURNING *;
    `;

    const response = await client.query(sql, [nombre, descripcion, ubicacion, fk_cultivo_id, fk_lote_id, Bancal_Id]);

    if (response.rows.length > 0) {
      return res.status(200).json({ message: "Bancal actualizado exitosamente", data: response.rows[0] });
    } else {
      return res.status(404).json({ message: "Bancal no encontrado" });
    }
  } catch (error) {
    console.error("Error al actualizar el bancal:", error.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

export const RegistrarTrazBancal = async (req, res) => {
  try {
    const { nombre, descripcion, ubicacion, fk_cultivo_id, fk_lote_id } = req.body;

    if (!nombre || !descripcion || !ubicacion || !fk_cultivo_id || !fk_lote_id) {
      return res.status(400).json({ message: "El nombre, descripcion, ubicacion, fk_cultivo_id y fk_lote_id son obligatorios" });
    }

    const sql = `
      INSERT INTO "Trazabilidad_bancal" (nombre, descripcion, ubicacion, fk_cultivo_id, fk_lote_id) 
      VALUES ($1, $2, $3, $4, $5) 
      RETURNING *;
    `;

    const response = await client.query(sql, [nombre, descripcion, ubicacion, fk_cultivo_id, fk_lote_id]);

    return res.status(201).json({ message: "Bancal registrado exitosamente", data: response.rows[0] });
  } catch (error) {
    console.error("Error al registrar el bancal:", error.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

export const EliminarTrazBancal = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "El ID es obligatorio" });
    }

    const sql = `
      DELETE FROM "Trazabilidad_bancal" 
      WHERE id = $1 
      RETURNING *;
    `;

    const response = await client.query(sql, [id]);

    if (response.rowCount > 0) {
      return res.status(200).json({ message: "Bancal eliminado exitosamente", data: response.rows[0] });
    } else {
      return res.status(404).json({ message: "Bancal no encontrado" });
    }
  } catch (error) {
    console.error("Error al eliminar el bancal:", error.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};
