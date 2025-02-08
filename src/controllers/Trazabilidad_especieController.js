import { client } from '../database/conexion.js';

export const ListarTrazEspecie = async (req, res) => {
  try {
    const response = await client.query('SELECT * FROM "Trazabilidad_especie";');
    if (response.rows.length > 0) {
      return res.status(200).json(response.rows);
    } else {
      return res.status(404).json({ message: "Especie no encontrados" });
    }
  } catch (err) {
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

export const BuscarTrazEspecie = async (req, res) => {
  const especie_Id = req.params.id;
  try {
    const response = await client.query('SELECT * FROM "Trazabilidad_especie" WHERE id = $1', [especie_Id]);
    if (response.rows.length > 0) {
      return res.status(200).json(response.rows[0]);
    } else {
      return res.status(404).json({ message: "Especie no encontrado" });
    }
  } catch (err) {
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

export const ActualizarTrazEspecie = async (req, res) => {
  const especie_Id = req.params.id;
  const { nombre, fk_tipo_especie_id } = req.body;

  if (!nombre || !fk_tipo_especie_id) {
    return res.status(400).json({ message: "El nombre, fk_tipo_especie_id son obligatorios" });
  }

  try {
    const sql = `
      UPDATE "Trazabilidad_especie" 
      SET nombre = $1, fk_tipo_especie_id = $2
      WHERE id = $3
      RETURNING *;
    `;

    const response = await client.query(sql, [nombre, fk_tipo_especie_id, especie_Id]);
    if (response.rows.length > 0) {
      return res.status(200).json({ message: "Especie actualizado exitosamente", data: response.rows[0] });
    } else {
      return res.status(404).json({ message: "Especie no encontrado" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

export const RegistrarTrazEspecie = async (req, res) => {
  try {
    const { nombre, fk_tipo_especie_id } = req.body;
    if (!nombre || !fk_tipo_especie_id) {
      return res.status(400).json({ message: "El nombre y fk_tipo_especie_id son obligatorios" });
    }

    const sql = `
      INSERT INTO "Trazabilidad_especie" (nombre, fk_tipo_especie_id) 
      VALUES ($1, $2) 
      RETURNING *;
    `;

    const response = await client.query(sql, [nombre, fk_tipo_especie_id]);
    return res.status(201).json({ message: "Especie registrado exitosamente", data: response.rows[0] });
  } catch (error) {
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

export const EliminarTrazEspecie = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ message: "El ID es obligatorio" });
    }

    const sql = `
      DELETE FROM "Trazabilidad_especie" 
      WHERE id = $1 
      RETURNING *;
    `;

    const response = await client.query(sql, [id]);
    if (response.rowCount > 0) {
      return res.status(200).json({ message: "Especie eliminado exitosamente", data: response.rows[0] });
    } else {
      return res.status(404).json({ message: "Especie no encontrado" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Error en el sistema" });
  }
};
