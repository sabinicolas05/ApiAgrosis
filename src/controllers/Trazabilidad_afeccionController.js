import { client } from '../database/conexion.js';

export const ListarTrazAfeccion = async (req, res) => {
  try {
    const response = await client.query('SELECT * FROM "Trazabilidad_afeccion";');
    if (response.rows.length > 0) {
      return res.status(200).json(response.rows);
    } else {
      return res.status(404).json({ message: "Afección no encontrada" });
    }
  } catch (err) {
    console.error("Error al obtener datos:", err.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

export const BuscarTrazAfeccion = async (req, res) => {
  const Afeccion_Id = req.params.id;
  console.log(`ID de la afección buscada: ${Afeccion_Id}`);

  try {
    const response = await client.query('SELECT * FROM "Trazabilidad_afeccion" WHERE id = $1', [Afeccion_Id]);
    console.log('Respuesta de la base de datos:', response.rows);

    if (response.rows.length > 0) {
      return res.status(200).json(response.rows[0]);
    } else {
      return res.status(404).json({ message: "Afección no encontrada" });
    }
  } catch (err) {
    console.error("Error al obtener datos:", err.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

export const ActualizarTrazAfeccion = async (req, res) => {
  const Afeccion_Id = req.params.id;
  console.log(`ID de la afección a actualizar: ${Afeccion_Id}`);
  console.log("Cuerpo de la solicitud:", req.body);

  const { fecha, descripcion, fk_bancal_id, fk_plaga_id } = req.body;

  if (!fecha || !descripcion || !fk_bancal_id || !fk_plaga_id) {
    return res.status(400).json({ message: "Fecha, descripción, fk_bancal_id y fk_plaga_id son obligatorios" });
  }

  try {
    const sql = `
      UPDATE "Trazabilidad_afeccion" 
      SET fecha = $1, descripcion = $2, fk_bancal_id = $3, fk_plaga_id = $4 
      WHERE id = $5
      RETURNING *;
    `;

    const response = await client.query(sql, [fecha, descripcion, fk_bancal_id, fk_plaga_id, Afeccion_Id]);
    console.log('Respuesta de la base de datos:', response.rows);

    if (response.rows.length > 0) {
      return res.status(200).json({ message: "Afección actualizada exitosamente", data: response.rows[0] });
    } else {
      return res.status(404).json({ message: "Afección no encontrada" });
    }
  } catch (error) {
    console.error("Error al actualizar la afección:", error.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

export const RegistrarTrazAfeccion = async (req, res) => {
  try {
    console.log("Cuerpo de la solicitud:", req.body);

    const { fecha, descripcion, fk_bancal_id, fk_plaga_id } = req.body;

    if (!fecha || !descripcion || !fk_bancal_id || !fk_plaga_id) {
      return res.status(400).json({ message: "Fecha, descripción, fk_bancal_id y fk_plaga_id son obligatorios" });
    }

    const sql = `
      INSERT INTO "Trazabilidad_afeccion" (fecha, descripcion, fk_bancal_id, fk_plaga_id) 
      VALUES ($1, $2, $3, $4) 
      RETURNING *;
    `;

    const response = await client.query(sql, [fecha, descripcion, fk_bancal_id, fk_plaga_id]);

    return res.status(201).json({ message: "Afección registrada exitosamente", data: response.rows[0] });
  } catch (error) {
    console.error("Error al registrar la afección:", error.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

export const EliminarTrazAfeccion = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "El ID es obligatorio" });
    }

    const sql = `
      DELETE FROM "Trazabilidad_afeccion" 
      WHERE id = $1 
      RETURNING *;
    `;

    const response = await client.query(sql, [id]);

    if (response.rowCount > 0) {
      return res.status(200).json({ message: "Afección eliminada exitosamente", data: response.rows[0] });
    } else {
      return res.status(404).json({ message: "Afección no encontrada" });
    }
  } catch (error) {
    console.error("Error al eliminar la afección:", error.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};
