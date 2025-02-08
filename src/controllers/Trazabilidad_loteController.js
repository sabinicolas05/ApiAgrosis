import { client } from '../database/conexion.js';

export const ListarTrazLote = async (req, res) => {
  try {
    const response = await client.query('SELECT * FROM "Trazabilidad_lote";');
    if (response.rows.length > 0) {
      return res.status(200).json(response.rows);
    } else {
      return res.status(404).json({ message: "Lote no encontrados" });
    }
  } catch (err) {
    console.error("Error al obtener datos:", err.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

export const BuscarTrazLote = async (req, res) => {
  const control_Id = req.params.id;

  try {
    const response = await client.query('SELECT * FROM "Trazabilidad_lote" WHERE id = $1', [control_Id]);

    if (response.rows.length > 0) {
      return res.status(200).json(response.rows[0]);
    } else {
      return res.status(404).json({ message: "Lote no encontrado" });
    }
  } catch (err) {
    console.error("Error al obtener datos:", err.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

export const ActualizarTrazLote = async (req, res) => {
  const control_Id = req.params.id;
  const { nombre, descripcion, ubicacion } = req.body;

  if (!nombre || !descripcion || !ubicacion) {
    return res.status(400).json({ message: "El nombre, descripcion, ubicacion son obligatorios" });
  }

  try {
    const sql = `
      UPDATE "Trazabilidad_lote" 
      SET nombre = $1, descripcion = $2, ubicacion = $3
      WHERE id = $4
      RETURNING *;
    `;

    const response = await client.query(sql, [nombre, descripcion, ubicacion, control_Id]);

    if (response.rows.length > 0) {
      return res.status(200).json({ message: "Lote actualizado exitosamente", data: response.rows[0] });
    } else {
      return res.status(404).json({ message: "Lote no encontrado" });
    }
  } catch (error) {
    console.error("Error al actualizar el Lote:", error.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

export const RegistrarTrazLote = async (req, res) => {
  try {
    const { nombre, descripcion, ubicacion } = req.body;

    if (!nombre || !descripcion || !ubicacion) {
      return res.status(400).json({ message: "El nombre y descripcion, ubicacion son obligatorios" });
    }

    const sql = `
      INSERT INTO "Trazabilidad_lote" (nombre, descripcion, ubicacion) 
      VALUES ($1, $2, $3) 
      RETURNING *;
    `;

    const response = await client.query(sql, [nombre, descripcion, ubicacion]);
    return res.status(201).json({ message: "Lote registrado exitosamente", data: response.rows[0] });
  } catch (error) {
    console.error("Error al registrar el lote:", error.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

export const EliminarTrazLote = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "El ID es obligatorio" });
    }

    const sql = `
      DELETE FROM "Trazabilidad_lote" 
      WHERE id = $1 
      RETURNING *;
    `;

    const response = await client.query(sql, [id]);

    if (response.rowCount > 0) {
      return res.status(200).json({ message: "Lote eliminado exitosamente", data: response.rows[0] });
    } else {
      return res.status(404).json({ message: "Lote no encontrado" });
    }
  } catch (error) {
    console.error("Error al eliminar el Lote:", error.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};
