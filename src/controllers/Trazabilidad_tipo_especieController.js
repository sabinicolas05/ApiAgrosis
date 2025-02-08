import { client } from '../database/conexion.js';

export const ListarTrazTipoEspecie = async (req, res) => {
  try {
    const response = await client.query('SELECT * FROM "Trazabilidad_tipo_especie";');
    if (response.rows.length > 0) {
      return res.status(200).json(response.rows);
    } else {
      return res.status(404).json({ message: "Especie no encontrados" });
    }
  } catch (err) {
    console.error("Error al obtener datos:", err.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

export const BuscarTrazTipoEspecie = async (req, res) => {
  const Tipo_especie_Id = req.params.id;
  try {
    const response = await client.query('SELECT * FROM "Trazabilidad_tipo_especie" WHERE id = $1', [Tipo_especie_Id]);
    if (response.rows.length > 0) {
      return res.status(200).json(response.rows[0]);
    } else {
      return res.status(404).json({ message: "Especie no encontrado" });
    }
  } catch (err) {
    console.error("Error al obtener datos:", err.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

export const ActualizarTrazTipoEspecie = async (req, res) => {
  const Tipo_especie_Id = req.params.id;
  const { tipo, descripcion, tiempo_crecimiento } = req.body;
  if (!tipo || !descripcion || !tiempo_crecimiento) {
    return res.status(400).json({ message: "El tipo, descripcion, tiempo_crecimiento son obligatorios" });
  }
  try {
    const sql = `
      UPDATE "Trazabilidad_tipo_especie" 
      SET tipo = $1, descripcion = $2, tiempo_crecimiento = $3
      WHERE id = $4
      RETURNING *;
    `;
    const response = await client.query(sql, [tipo, descripcion, tiempo_crecimiento, Tipo_especie_Id]);
    if (response.rows.length > 0) {
      return res.status(200).json({ message: "TipoEspecie actualizado exitosamente", data: response.rows[0] });
    } else {
      return res.status(404).json({ message: "TipoEspecie no encontrado" });
    }
  } catch (error) {
    console.error("Error al actualizar el Tipoespecie:", error.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

export const RegistrarTrazTipoEspecie = async (req, res) => {
  try {
    const { tipo, descripcion, tiempo_crecimiento } = req.body;
    if (!tipo || !descripcion || !tiempo_crecimiento) {
      return res.status(400).json({ message: "El tipo y descripcion, tiempo_crecimiento son obligatorios" });
    }
    const sql = `
      INSERT INTO "Trazabilidad_tipo_especie" (tipo, descripcion, tiempo_crecimiento) 
      VALUES ($1, $2, $3) 
      RETURNING *;
    `;
    const response = await client.query(sql, [tipo, descripcion, tiempo_crecimiento]);
    return res.status(201).json({ message: "TipoEspecie registrado exitosamente", data: response.rows[0] });
  } catch (error) {
    console.error("Error al registrar el Tipoespecie:", error.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

export const EliminarTrazTipoEspecie = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ message: "El ID es obligatorio" });
    }
    const sql = `
      DELETE FROM "Trazabilidad_tipo_especie" 
      WHERE id = $1 
      RETURNING *;
    `;
    const response = await client.query(sql, [id]);
    if (response.rowCount > 0) {
      return res.status(200).json({ message: "TipoEspecie eliminado exitosamente", data: response.rows[0] });
    } else {
      return res.status(404).json({ message: "TipoEspecie no encontrado" });
    }
  } catch (error) {
    console.error("Error al eliminar el Tipoespecie:", error.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};
