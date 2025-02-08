import { client } from '../database/conexion.js';

export const ListarTrazTipoPlaga = async (req, res) => {
  try {
    const response = await client.query('SELECT * FROM "Trazabilidad_tipo_plaga";');
    if (response.rows.length > 0) {
      return res.status(200).json(response.rows);
    } else {
      return res.status(404).json({ message: "tipo_plaga no encontrados" });
    }
  } catch (err) {
    console.error("Error al obtener datos:", err.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

export const BuscarTrazTipoPlaga = async (req, res) => {
  const Tipo_plaga_Id = req.params.id;
  try {
    const response = await client.query('SELECT * FROM "Trazabilidad_tipo_plaga" WHERE id = $1', [Tipo_plaga_Id]);
    if (response.rows.length > 0) {
      return res.status(200).json(response.rows[0]);
    } else {
      return res.status(404).json({ message: "tipo_plaga no encontrado" });
    }
  } catch (err) {
    console.error("Error al obtener datos:", err.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

export const ActualizarTrazTipoPlaga = async (req, res) => {
  const Tipo_plaga_Id = req.params.id;
  const { tipo, descripcion } = req.body;
  if (!tipo || !descripcion) {
    return res.status(400).json({ message: "El tipo, descripcion son obligatorios" });
  }
  try {
    const sql = `
      UPDATE "Trazabilidad_tipo_plaga" 
      SET tipo = $1, descripcion = $2
      WHERE id = $3
      RETURNING *;
    `;
    const response = await client.query(sql, [tipo, descripcion, Tipo_plaga_Id]);
    if (response.rows.length > 0) {
      return res.status(200).json({ message: "tipo_plaga actualizado exitosamente", data: response.rows[0] });
    } else {
      return res.status(404).json({ message: "tipo_plaga no encontrado" });
    }
  } catch (error) {
    console.error("Error al actualizar el tipo_plaga:", error.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

export const RegistrarTrazTipoPlaga = async (req, res) => {
  try {
    const { tipo, descripcion } = req.body;
    if (!tipo || !descripcion) {
      return res.status(400).json({ message: "El tipo y descripcion son obligatorios" });
    }
    const sql = `
      INSERT INTO "Trazabilidad_tipo_plaga" (tipo, descripcion) 
      VALUES ($1, $2) 
      RETURNING *;
    `;
    const response = await client.query(sql, [tipo, descripcion]);
    return res.status(201).json({ message: "tipo_plaga registrado exitosamente", data: response.rows[0] });
  } catch (error) {
    console.error("Error al registrar el tipo_plaga:", error.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

export const EliminarTrazTipoPlaga = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ message: "El ID es obligatorio" });
    }
    const sql = `
      DELETE FROM "Trazabilidad_tipo_plaga" 
      WHERE id = $1 
      RETURNING *;
    `;
    const response = await client.query(sql, [id]);
    if (response.rowCount > 0) {
      return res.status(200).json({ message: "tipo_plaga eliminado exitosamente", data: response.rows[0] });
    } else {
      return res.status(404).json({ message: "tipo_plaga no encontrado" });
    }
  } catch (error) {
    console.error("Error al eliminar el tipo_plaga:", error.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};
