import { client } from '../database/conexion.js';

export const ListarInventarioInsumo = async (req, res) => {
  try {
    const response = await client.query('SELECT * FROM "Inventario_insumo";');
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

export const BuscarInventarioInsumo = async (req, res) => {
  const Inventario_insumoId = req.params.id;

  try {
    const response = await client.query('SELECT * FROM "Inventario_insumo" WHERE id = $1', [Inventario_insumoId]);

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

export const ActualizarInventarioInsumo = async (req, res) => {
  const Inventario_insumoId = req.params.id;
  
  const { cantidad, precio, tipo_empacado, unidadMedida, fk_tipo_insumo_id } = req.body;

  if (!cantidad || !precio || !tipo_empacado || !unidadMedida || !fk_tipo_insumo_id) {
    return res.status(400).json({ message: 'El cantidad, precio, tipo_empacado, unidadMedida, fk_tipo_insumo_id son obligatorios' });
  }

  try {
    const sql = `
      UPDATE "Inventario_insumo" 
      SET cantidad = $1, precio = $2, tipo_empacado = $3, "unidadMedida" = $4, fk_tipo_insumo_id = $5
      WHERE id = $6
      RETURNING *;
    `;

    const response = await client.query(sql, [cantidad, precio, tipo_empacado, unidadMedida, fk_tipo_insumo_id, Inventario_insumoId]);

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

export const RegistrarInventarioInsumo = async (req, res) => {
  try {
    const { cantidad, precio, tipo_empacado, unidadMedida, fk_tipo_insumo_id } = req.body;

    if (!cantidad || !precio || !tipo_empacado || !unidadMedida || !fk_tipo_insumo_id) {
      return res.status(400).json({ 
        message: "El cantidad, las precio, el tipo_empacado, el unidadMedida y el fk_tipo_insumo_id son obligatorios." 
      });
    }

    const sql = `
      INSERT INTO "Inventario_insumo" (cantidad, precio, tipo_empacado, "unidadMedida", fk_tipo_insumo_id) 
      VALUES ($1, $2, $3, $4, $5) 
      RETURNING *;
    `;

    const response = await client.query(sql, [cantidad, precio, tipo_empacado, unidadMedida, fk_tipo_insumo_id]);

    return res.status(201).json({ 
      message: "Herramienta registrada exitosamente", 
      data: response.rows[0] 
    });

  } catch (error) {
    console.error("Error al registrar la herramienta:", error.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

export const EliminarInventarioInsumo = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "El ID es obligatorio" });
    }

    const sql = `
      DELETE FROM "Inventario_insumo" 
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
