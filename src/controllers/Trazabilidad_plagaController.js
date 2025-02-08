import { client } from '../database/conexion.js';

export const ListarTrazPlaga = async (req, res) => {
  try {
    const response = await client.query('SELECT * FROM "Trazabilidad_plaga";');
    return response.rows.length > 0
      ? res.status(200).json(response.rows)
      : res.status(404).json({ message: "Plaga no encontrados" });
  } catch (err) {
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

export const BuscarTrazPlaga = async (req, res) => {
  const Plaga_Id = req.params.id;
  try {
    const response = await client.query('SELECT * FROM "Trazabilidad_plaga" WHERE id = $1', [Plaga_Id]);
    return response.rows.length > 0
      ? res.status(200).json(response.rows[0])
      : res.status(404).json({ message: "Plaga no encontrado" });
  } catch (err) {
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

export const ActualizarTrazPlaga = async (req, res) => {
  const Plaga_Id = req.params.id;
  const { nombre, fk_tipo_plaga_id } = req.body;
  if (!nombre || !fk_tipo_plaga_id) {
    return res.status(400).json({ message: "El nombre y fk_tipo_plaga_id son obligatorios" });
  }
  try {
    const sql = `
      UPDATE "Trazabilidad_plaga" 
      SET nombre = $1, fk_tipo_plaga_id = $2
      WHERE id = $3
      RETURNING *;
    `;
    const response = await client.query(sql, [nombre, fk_tipo_plaga_id, Plaga_Id]);
    return response.rows.length > 0
      ? res.status(200).json({ message: "Plaga actualizado exitosamente", data: response.rows[0] })
      : res.status(404).json({ message: "Plaga no encontrado" });
  } catch (error) {
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

export const RegistrarTrazPlaga = async (req, res) => {
  const { nombre, fk_tipo_plaga_id } = req.body;
  if (!nombre || !fk_tipo_plaga_id) {
    return res.status(400).json({ message: "El nombre y fk_tipo_plaga_id son obligatorios" });
  }
  try {
    const sql = `
      INSERT INTO "Trazabilidad_plaga" (nombre, fk_tipo_plaga_id) 
      VALUES ($1, $2) 
      RETURNING *;
    `;
    const response = await client.query(sql, [nombre, fk_tipo_plaga_id]);
    return res.status(201).json({ message: "Plaga registrado exitosamente", data: response.rows[0] });
  } catch (error) {
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

export const EliminarTrazPlaga = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ message: "El ID es obligatorio" });
  }
  try {
    const sql = `
      DELETE FROM "Trazabilidad_plaga" 
      WHERE id = $1 
      RETURNING *;
    `;
    const response = await client.query(sql, [id]);
    return response.rowCount > 0
      ? res.status(200).json({ message: "Plaga eliminado exitosamente", data: response.rows[0] })
      : res.status(404).json({ message: "Plaga no encontrado" });
  } catch (error) {
    return res.status(500).json({ message: "Error en el sistema" });
  }
};
