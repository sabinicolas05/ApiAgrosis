
import { client } from '../database/conexion.js';

export const ListarFinanzasResiduo = async (req, res) => {
  try {
    const response = await client.query('SELECT * FROM "Finanzas_residuo";');
    if (response.rows.length > 0) {
      return res.status(200).json(response.rows);
    } else {
      return res.status(404).json({ message: "Residuo no encontrados" });
    }
  } catch (err) {
    console.error("Error al obtener datos:", err.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

export const BuscarFinanzasResiduo = async (req, res) => {
  const residuo_Id = req.params.id;
  console.log(`ID del Finanzas_Residuo buscado: ${residuo_Id}`);

  try {
    const response = await client.query('SELECT * FROM "Finanzas_residuo" WHERE id = $1', [residuo_Id]);
    console.log('Respuesta de la base de datos:', response.rows);

    if (response.rows.length > 0) {
      return res.status(200).json(response.rows[0]);
    } else {
      return res.status(404).json({ message: "Residuo no encontrado" });
    }
  } catch (err) {
    console.error("Error al obtener datos:", err.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

export const ActualizarFinanzasResiduo = async (req, res) => {
  const residuo_Id = req.params.id;
  console.log(`ID del Finanzas_Residuo a actualizar: ${residuo_Id}`);
  console.log("Cuerpo de la solicitud:", req.body);

  const { cantidad, fk_cultivo_id, fk_tipo_residuo_id } = req.body;

  if (!cantidad || !fk_cultivo_id || !fk_tipo_residuo_id) {
    return res.status(400).json({ message: "El cantidad, fk_cultivo_id, fk_tipo_residuo_id son obligatorios" });
  }

  try {
    const sql = `
      UPDATE "Finanzas_residuo" 
      SET cantidad = $1, fk_cultivo_id = $2, fk_tipo_residuo_id = $3
      WHERE id = $4
      RETURNING *;
    `;

    const response = await client.query(sql, [cantidad, fk_cultivo_id, fk_tipo_residuo_id, residuo_Id]);
    console.log('Respuesta de la base de datos:', response.rows);

    if (response.rows.length > 0) {
      return res.status(200).json({ message: "Finazas_Residuo actualizado exitosamente", data: response.rows[0] });
    } else {
      return res.status(404).json({ message: "Finazas_Residuo no encontrado" });
    }
  } catch (error) {
    console.error("Error al actualizar el Finazas_Residuo:", error.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

export const RegistrarFinanzasResiduo = async (req, res) => {
  try {
    console.log("Cuerpo de la solicitud:", req.body);

    const { cantidad, fk_cultivo_id, fk_tipo_residuo_id } = req.body;

    if (!cantidad || !fk_cultivo_id || !fk_tipo_residuo_id) {
      return res.status(400).json({ message: "El cantidad y fk_cultivo_id, fk_tipo_residuo_id son obligatorios" });
    }

    const sql = `
      INSERT INTO "Finanzas_residuo" (cantidad, fk_cultivo_id, fk_tipo_residuo_id) 
      VALUES ($1, $2, $3) 
      RETURNING *;
    `;

    const response = await client.query(sql, [cantidad, fk_cultivo_id, fk_tipo_residuo_id]);

    return res.status(201).json({ message: "Finazas_Residuo registrado exitosamente", data: response.rows[0] });
  } catch (error) {
    console.error("Error al registrar el Finazas_Residuo:", error.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

export const EliminarFinanzasResiduo = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "El ID es obligatorio" });
    }

    const sql = `
      DELETE FROM "Finanzas_residuo" 
      WHERE id = $1 
      RETURNING *;
    `;

    const response = await client.query(sql, [id]);

    if (response.rowCount > 0) {
      return res.status(200).json({ message: "Finazas_Residuo eliminado exitosamente", data: response.rows[0] });
    } else {
      return res.status(404).json({ message: "Finazas_Residuo no encontrado" });
    }
  } catch (error) {
    console.error("Error al eliminar el Finazas_Residuo:", error.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};
