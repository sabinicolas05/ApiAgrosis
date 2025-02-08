import { client } from '../database/conexion.js';

export const ListarTrazSemillero = async (req, res) => {
  try {
    const response = await client.query('SELECT * FROM "Trazabilidad_semillero";');
    if (response.rows.length > 0) {
      return res.status(200).json(response.rows);
    } else {
      return res.status(404).json({ message: "Semillero no encontrados" });
    }
  } catch (err) {
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

export const BuscarTrazSemillero = async (req, res) => {
  const Semillero_id = req.params.id;

  try {
    const response = await client.query('SELECT * FROM "Trazabilidad_semillero" WHERE id = $1', [Semillero_id]);
    if (response.rows.length > 0) {
      return res.status(200).json(response.rows[0]);
    } else {
      return res.status(404).json({ message: "Semillero no encontrado" });
    }
  } catch (err) {
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

export const ActualizarTrazSemillero = async (req, res) => {
  const Semillero_id = req.params.id;
  const { nombre_semilla, fecha_siembra, fecha_estimada, unidades, fk_especie_id, fk_lote_id } = req.body;

  if (!nombre_semilla || !fecha_siembra || !fecha_estimada || !unidades || !fk_especie_id || !fk_lote_id) {
    return res.status(400).json({ message: "Todos los campos son obligatorios" });
  }

  try {
    const sql = `
      UPDATE "Trazabilidad_semillero" 
      SET nombre_semilla = $1, fecha_siembra = $2, fecha_estimada = $3, unidades = $4, fk_especie_id = $5, fk_lote_id = $6
      WHERE id = $7
      RETURNING *;
    `;
    const response = await client.query(sql, [nombre_semilla, fecha_siembra, fecha_estimada, unidades, fk_especie_id, fk_lote_id, Semillero_id]);

    if (response.rows.length > 0) {
      return res.status(200).json({ message: "Semillero actualizado exitosamente", data: response.rows[0] });
    } else {
      return res.status(404).json({ message: "Semillero no encontrado" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

export const RegistrarTrazSemillero = async (req, res) => {
  try {
    const { nombre_semilla, fecha_siembra, fecha_estimada, unidades, fk_especie_id, fk_lote_id } = req.body;

    if (!nombre_semilla || !fecha_siembra || !fecha_estimada || !unidades || !fk_especie_id || !fk_lote_id) {
      return res.status(400).json({ message: "Todos los campos son obligatorios" });
    }

    const sql = `
      INSERT INTO "Trazabilidad_semillero" (nombre_semilla, fecha_siembra, fecha_estimada, unidades, fk_especie_id, fk_lote_id) 
      VALUES ($1, $2, $3, $4, $5, $6) 
      RETURNING *;
    `;
    const response = await client.query(sql, [nombre_semilla, fecha_siembra, fecha_estimada, unidades, fk_especie_id, fk_lote_id]);

    return res.status(201).json({ message: "Semillero registrado exitosamente", data: response.rows[0] });
  } catch (error) {
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

export const EliminarTrazSemillero = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "El ID es obligatorio" });
    }

    const sql = `
      DELETE FROM "Trazabilidad_semillero" 
      WHERE id = $1 
      RETURNING *;
    `;
    const response = await client.query(sql, [id]);

    if (response.rowCount > 0) {
      return res.status(200).json({ message: "Semillero eliminado exitosamente", data: response.rows[0] });
    } else {
      return res.status(404).json({ message: "Semillero no encontrado" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Error en el sistema" });
  }
};
