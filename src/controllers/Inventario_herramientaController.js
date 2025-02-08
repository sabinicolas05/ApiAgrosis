import { client } from '../database/conexion.js';

export const ListarInventarioHerramienta = async (req, res) => {
  try {
    const response = await client.query('SELECT * FROM "Inventario_herramienta";');
    if (response.rows.length > 0) {
      return res.status(200).json(response.rows);
    } else {
      return res.status(404).json({ message: "Herramienta no encontradas" });
    }
  } catch (err) {
    console.error("Error al obtener datos:", err.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

export const BuscarInventarioHerramienta = async (req, res) => {
  const Inventario_herramientaId = req.params.id;
  try {
    const response = await client.query('SELECT * FROM "Inventario_herramienta" WHERE id = $1', [Inventario_herramientaId]);
    if (response.rows.length > 0) {
      return res.status(200).json(response.rows[0]);
    } else {
      return res.status(404).json({ message: "Herramienta no encontrada" });
    }
  } catch (err) {
    console.error("Error al obtener datos:", err.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

export const ActualizarInventarioHerramienta = async (req, res) => {
  const Inventario_herramientaId = req.params.id;
  const { nombre, unidades, precioCU, estado, fk_tipo_herramienta_id } = req.body;

  if (!nombre || !unidades || !precioCU || !estado || !fk_tipo_herramienta_id) {
    return res.status(400).json({ message: 'El nombre, unidades, precioCU, estado y fk_tipo_herramienta_id son obligatorios' });
  }

  try {
    const sql = `
      UPDATE "Inventario_herramienta" 
      SET nombre = $1, unidades = $2, "precioCU" = $3 , estado = $4, fk_tipo_herramienta_id = $5
      WHERE id = $6
      RETURNING *;
    `;

    const response = await client.query(sql, [nombre, unidades, precioCU, estado, fk_tipo_herramienta_id, Inventario_herramientaId]);

    if (response.rows.length > 0) {
      return res.status(200).json({ message: "Herramienta actualizada exitosamente", data: response.rows[0] });
    } else {
      return res.status(404).json({ message: "Herramienta no encontrada" });
    }
  } catch (error) {
    console.error("Error al actualizar la Herramienta:", error.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

export const RegistrarInventarioHerramienta = async (req, res) => {
  try {
    const { nombre, unidades, precioCU, estado, fk_tipo_herramienta_id } = req.body;

    if (!nombre || !unidades || !precioCU || !estado || !fk_tipo_herramienta_id) {
      return res.status(400).json({ message: "El nombre, unidades, precioCU, estado y fk_tipo_herramienta_id son obligatorios." });
    }

    const sql = `
      INSERT INTO "Inventario_herramienta" (nombre, unidades, "precioCU", estado, fk_tipo_herramienta_id) 
      VALUES ($1, $2, $3, $4, $5) 
      RETURNING *;
    `;

    const response = await client.query(sql, [nombre, unidades, precioCU, estado, fk_tipo_herramienta_id]);

    return res.status(201).json({ message: "Herramienta registrada exitosamente", data: response.rows[0] });
  } catch (error) {
    console.error("Error al registrar la herramienta:", error.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

export const EliminarInventarioHerramienta = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ message: "El ID es obligatorio" });
    }

    const sql = `
      DELETE FROM "Inventario_herramienta" 
      WHERE id = $1 
      RETURNING *;
    `;

    const response = await client.query(sql, [id]);

    if (response.rowCount > 0) {
      return res.status(200).json({ message: "Herramienta eliminada exitosamente", data: response.rows[0] });
    } else {
      return res.status(404).json({ message: "Herramienta no encontrada" });
    }
  } catch (error) {
    console.error("Error al eliminar la Herramienta:", error.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};
