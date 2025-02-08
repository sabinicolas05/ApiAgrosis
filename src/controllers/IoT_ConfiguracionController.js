import { client } from '../database/conexion.js';

export const ListarSensorConfig = async (req, res) => {
  try {
    const response = await client.query('SELECT * FROM "IoT_configuracion";');
    if (response.rows.length > 0) {
      return res.status(200).json(response.rows);
    } else {
      return res.status(404).json({ message: "Sensores no encontrados" });
    }
  } catch (err) {
    console.error("Error al obtener datos:", err.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

export const BuscarSensorConfig = async (req, res) => {
  const IoT_Config_Id = req.params.id;

  try {
    const response = await client.query('SELECT * FROM "IoT_configuracion" WHERE id = $1', [IoT_Config_Id]);

    if (response.rows.length > 0) {
      return res.status(200).json(response.rows[0]);
    } else {
      return res.status(404).json({ message: "configuracion de sensor no encontrado" });
    }
  } catch (err) {
    console.error("Error al obtener datos:", err.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

export const ActualizarSensorConfig = async (req, res) => {
  const IoT_Config_Id = req.params.id;

  const { tipo_cultivo, tipo_sensor, valor_min, valor_max } = req.body;

  if (!tipo_cultivo || !tipo_sensor || !valor_min || !valor_max) {
    return res.status(400).json({ message: "El tipo_cultivo, tipo_sensor, valor_min y valor_max son obligatorios" });
  }

  try {
    const sql = `
      UPDATE "IoT_configuracion" 
      SET tipo_cultivo = $1, tipo_sensor = $2, valor_min = $3, valor_max = $4
      WHERE id = $5 
      RETURNING *;
    `;

    const response = await client.query(sql, [tipo_cultivo, tipo_sensor, valor_min, valor_max, IoT_Config_Id]);

    if (response.rows.length > 0) {
      return res.status(200).json({ message: "configuracion de sensor actualizado exitosamente", data: response.rows[0] });
    } else {
      return res.status(404).json({ message: "configuracion de sensor no encontrado" });
    }
  } catch (error) {
    console.error("Error al actualizar el configuracion de sensor:", error.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

export const RegistrarSensorConfig = async (req, res) => {
  try {
    const { tipo_cultivo, tipo_sensor, valor_min, valor_max } = req.body;

    if (!tipo_cultivo || !tipo_sensor || !valor_min || !valor_max) {
      return res.status(400).json({ message: "El tipo_cultivo, tipo_sensor, valor_min y valor_max son obligatorios" });
    }

    const sql = `
      INSERT INTO "IoT_configuracion" (tipo_cultivo, tipo_sensor, valor_min, valor_max) 
      VALUES ($1, $2, $3, $4) 
      RETURNING *;
    `;

    const response = await client.query(sql, [tipo_cultivo, tipo_sensor, valor_min, valor_max]);

    return res.status(201).json({ message: "configuracion de sensor registrado exitosamente", data: response.rows[0] });
  } catch (error) {
    console.error("Error al registrar el sensor:", error.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

export const EliminarSensorConfig = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "El ID es obligatorio" });
    }

    const sql = `
      DELETE FROM "IoT_configuracion" 
      WHERE id = $1 
      RETURNING *;
    `;

    const response = await client.query(sql, [id]);

    if (response.rowCount > 0) {
      return res.status(200).json({ message: "configuracion de sensor eliminado exitosamente", data: response.rows[0] });
    } else {
      return res.status(404).json({ message: "configuracion de sensor no encontrado" });
    }
  } catch (error) {
    console.error("Error al eliminar la configuracion de sensor:", error.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};
