import { client } from '../database/conexion.js';

export const ListarTrazTipoResiduo = async (req, res) => {
  try {
    const response = await client.query('SELECT * FROM "Trazabilidad_tipo_residuo";');
    if (response.rows.length > 0) {
      return res.status(200).json(response.rows);
    } else {
      return res.status(404).json({ message: "Tipo_residuo no encontrados" });
    }
  } catch (err) {
    console.error("Error al obtener datos:", err.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

export const BuscarTrazTipoResiduo = async (req, res) => {
  const Tipo_residuo_Id = req.params.id;
  try {
    const response = await client.query('SELECT * FROM "Trazabilidad_tipo_residuo" WHERE id = $1', [Tipo_residuo_Id]);
    if (response.rows.length > 0) {
      return res.status(200).json(response.rows[0]);
    } else {
      return res.status(404).json({ message: "Tipo_residuo no encontrado" });
    }
  } catch (err) {
    console.error("Error al obtener datos:", err.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

export const ActualizarTrazTipoResiduo = async (req, res) => {
  const Tipo_residuo_Id = req.params.id;
  const { nombre } = req.body;
  if (!nombre) {
    return res.status(400).json({ message: "El nombre es obligatorio" });
  }
  try {
    const sql = `
      UPDATE "Trazabilidad_tipo_residuo" 
      SET nombre = $1
      WHERE id = $2
      RETURNING *;
    `;
    const response = await client.query(sql, [nombre, Tipo_residuo_Id]);
    if (response.rows.length > 0) {
      return res.status(200).json({ message: "Tipo_residuo actualizado exitosamente", data: response.rows[0] });
    } else {
      return res.status(404).json({ message: "Tipo_residuo no encontrado" });
    }
  } catch (error) {
    console.error("Error al actualizar el Tipo_residuo:", error.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

export const RegistrarTrazTipoResiduo = async (req, res) => {
  try {
    const { nombre } = req.body;
    if (!nombre) {
      return res.status(400).json({ message: "El nombre es obligatorio" });
    }
    const sql = `
      INSERT INTO "Trazabilidad_tipo_residuo" (nombre) 
      VALUES ($1) 
      RETURNING *;
    `;
    const response = await client.query(sql, [nombre]);
    return res.status(201).json({ message: "Tipo_residuo registrado exitosamente", data: response.rows[0] });
  } catch (error) {
    console.error("Error al registrar el Tipo_residuo:", error.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

export const EliminarTrazTipoResiduo = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ message: "El ID es obligatorio" });
    }
    const sql = `
      DELETE FROM "Trazabilidad_tipo_residuo" 
      WHERE id = $1 
      RETURNING *;
    `;
    const response = await client.query(sql, [id]);
    if (response.rowCount > 0) {
      return res.status(200).json({ message: "Tipo_residuo eliminado exitosamente", data: response.rows[0] });
    } else {
      return res.status(404).json({ message: "Tipo_residuo no encontrado" });
    }
  } catch (error) {
    console.error("Error al eliminar el Tipo_residuo:", error.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};
