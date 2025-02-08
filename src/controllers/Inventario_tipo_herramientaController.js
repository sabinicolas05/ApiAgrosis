import { client } from '../database/conexion.js';

export const ListarTipoHerramienta = async (req, res) => {
  try {
    const response = await client.query('SELECT * FROM "Inventario_tipo_herramienta";');
    if (response.rows.length > 0) {
      return res.status(200).json(response.rows);
    } else {
      return res.status(404).json({ message: "Tipo_herramienta no encontrados" });
    }
  } catch (err) {
    console.error("Error al obtener datos:", err.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

export const BuscarTipoHerramienta = async (req, res) => {
  const Tipo_herramienta_Id = req.params.id;

  try {
    const response = await client.query('SELECT * FROM "Inventario_tipo_herramienta" WHERE id = $1', [Tipo_herramienta_Id]);

    if (response.rows.length > 0) {
      return res.status(200).json(response.rows[0]);
    } else {
      return res.status(404).json({ message: "Tipo_herramienta no encontrado" });
    }
  } catch (err) {
    console.error("Error al obtener datos:", err.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

export const ActualizarTipoHerramienta = async (req, res) => {
  const Tipo_herramienta_Id = req.params.id;

  const { tipo } = req.body;

  if (!tipo) {
    return res.status(400).json({ message: "El tipo son obligatorios" });
  }

  try {
    const sql = `
      UPDATE "Inventario_tipo_herramienta" 
      SET tipo = $1
      WHERE id = $2
      RETURNING *;
    `;

    const response = await client.query(sql, [tipo, Tipo_herramienta_Id]);

    if (response.rows.length > 0) {
      return res.status(200).json({ message: "Tipo_herramienta actualizado exitosamente", data: response.rows[0] });
    } else {
      return res.status(404).json({ message: "Tipo_herramienta no encontrado" });
    }
  } catch (error) {
    console.error("Error al actualizar el Tipo_herramienta:", error.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

export const RegistrarTipoHerramienta = async (req, res) => {
  try {
    const { tipo } = req.body;

    if (!tipo) {
      return res.status(400).json({ message: "El tipo son obligatorios" });
    }

    const sql = `
      INSERT INTO "Inventario_tipo_herramienta" (tipo) 
      VALUES ($1) 
      RETURNING *;
    `;

    const response = await client.query(sql, [tipo]);

    return res.status(201).json({ message: "Tipo_herramienta registrado exitosamente", data: response.rows[0] });
  } catch (error) {
    console.error("Error al registrar el Tipo_herramienta:", error.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

export const EliminarTipoHerramienta = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "El ID es obligatorio" });
    }

    const sql = `
      DELETE FROM "Inventario_tipo_herramienta" 
      WHERE id = $1 
      RETURNING *;
    `;

    const response = await client.query(sql, [id]);

    if (response.rowCount > 0) {
      return res.status(200).json({ message: "Tipo_herramienta eliminado exitosamente", data: response.rows[0] });
    } else {
      return res.status(404).json({ message: "Tipo_herramienta no encontrado" });
    }
  } catch (error) {
    console.error("Error al eliminar el Tipo_herramienta:", error.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};
