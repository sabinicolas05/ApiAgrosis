import { client } from '../database/conexion.js';

export const ListarSensor = async (req, res) => {
  try {
    const response = await client.query('SELECT * FROM "IoT_sensor";');
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

export const BuscarSensor = async (req, res) => {
  const sensorId = req.params.id;

  try {
    const response = await client.query('SELECT * FROM "IoT_sensor" WHERE id = $1', [sensorId]);

    if (response.rows.length > 0) {
      return res.status(200).json(response.rows[0]);
    } else {
      return res.status(404).json({ message: "Sensor no encontrado" });
    }
  } catch (err) {
    console.error("Error al obtener datos:", err.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

export const ActualizarSensor = async (req, res) => {
  const sensorId = req.params.id;

  const { fk_bancal_id, fk_configuracion_id, fk_tipo_sensor_id } = req.body;

  if (!fk_bancal_id || !fk_configuracion_id || !fk_tipo_sensor_id) {
    return res.status(400).json({ message: "El fk_bancal_id, fk_configuracion_id, fk_tipo_sensor_id son obligatorios" });
  }

  try {
    const sql = `
      UPDATE "IoT_sensor" 
      SET fk_bancal_id = $1, fk_configuracion_id = $2, fk_tipo_sensor_id = $3 
      WHERE id = $4
      RETURNING *;
    `;

    const response = await client.query(sql, [fk_bancal_id, fk_configuracion_id, fk_tipo_sensor_id, sensorId]);

    if (response.rows.length > 0) {
      return res.status(200).json({ message: "Sensor actualizado exitosamente", data: response.rows[0] });
    } else {
      return res.status(404).json({ message: "Sensor no encontrado" });
    }
  } catch (error) {
    console.error("Error al actualizar el sensor:", error.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

export const RegistrarSensor = async (req, res) => {
  try {
    const { fk_bancal_id, fk_configuracion_id, fk_tipo_sensor_id } = req.body;

    if (!fk_bancal_id || !fk_configuracion_id || !fk_tipo_sensor_id) {
      return res.status(400).json({ message: "El fk_bancal_id, fk_configuracion_id, fk_tipo_sensor_id son obligatorios" });
    }

    const sql = `
      INSERT INTO "IoT_sensor" (fk_bancal_id, fk_configuracion_id, fk_tipo_sensor_id) 
      VALUES ($1, $2, $3) 
      RETURNING *;
    `;

    const response = await client.query(sql, [fk_bancal_id, fk_configuracion_id, fk_tipo_sensor_id]);

    return res.status(201).json({ message: "Sensor registrado exitosamente", data: response.rows[0] });
  } catch (error) {
    console.error("Error al registrar el sensor:", error.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

export const EliminarSensor = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "El ID es obligatorio" });
    }

    const sql = `
      DELETE FROM "IoT_sensor" 
      WHERE id = $1 
      RETURNING *;
    `;

    const response = await client.query(sql, [id]);

    if (response.rowCount > 0) {
      return res.status(200).json({ message: "Sensor eliminado exitosamente", data: response.rows[0] });
    } else {
      return res.status(404).json({ message: "Sensor no encontrado" });
    }
  } catch (error) {
    console.error("Error al eliminar el sensor:", error.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};
