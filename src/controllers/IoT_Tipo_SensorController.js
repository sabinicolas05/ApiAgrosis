import { client } from '../database/conexion.js';

export const ListarTipoSensor = async (req, res) => {
  try {
    const response = await client.query('SELECT * FROM "IoT_tipo_sensor";');
    if (response.rows.length > 0) {
      return res.status(200).json(response.rows);
    } else {
      return res.status(404).json({ message: "Tipo de Sensor no encontrados" });
    }
  } catch (err) {
    console.error("Error al obtener datos:", err.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

export const BuscarTipoSensor = async (req, res) => {
  const Tipo_sensorId = req.params.id;

  try {
    const response = await client.query('SELECT * FROM "IoT_tipo_sensor" WHERE id = $1', [Tipo_sensorId]);

    if (response.rows.length > 0) {
      return res.status(200).json(response.rows[0]);
    } else {
      return res.status(404).json({ message: "Tipo de Sensor no encontrado" });
    }
  } catch (err) {
    console.error("Error al obtener datos:", err.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

export const ActualizarTipoSensor = async (req, res) => {
  const Tipo_sensorId = req.params.id;

  const { nombre, tipo } = req.body;

  if (!nombre || !tipo) {
    return res.status(400).json({ message: "El nombre, tipo son obligatorios" });
  }

  try {
    const sql = `
      UPDATE "IoT_tipo_sensor" 
      SET nombre = $1, tipo = $2
      WHERE id = $3
      RETURNING *;
    `;

    const response = await client.query(sql, [nombre, tipo, Tipo_sensorId]);

    if (response.rows.length > 0) {
      return res.status(200).json({ message: "Tipo de Sensor actualizado exitosamente", data: response.rows[0] });
    } else {
      return res.status(404).json({ message: "Tipo de Sensor no encontrado" });
    }
  } catch (error) {
    console.error("Error al actualizar el tipo de sensor:", error.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

export const RegistrarTipoSensor = async (req, res) => {
  try {
    const { nombre, tipo } = req.body;

    if (!nombre || !tipo) {
      return res.status(400).json({ message: "El nombre, tipo son obligatorios" });
    }

    const sql = `
      INSERT INTO "IoT_tipo_sensor" (nombre, tipo) 
      VALUES ($1, $2) 
      RETURNING *;
    `;

    const response = await client.query(sql, [nombre, tipo]);

    return res.status(201).json({ message: "Tipo de Sensor registrado exitosamente", data: response.rows[0] });
  } catch (error) {
    console.error("Error al registrar el tipo de sensor:", error.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

export const EliminarTipoSensor = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "El ID es obligatorio" });
    }

    const sql = `
      DELETE FROM "IoT_tipo_sensor" 
      WHERE id = $1 
      RETURNING *;
    `;

    const response = await client.query(sql, [id]);

    if (response.rowCount > 0) {
      return res.status(200).json({ message: "Tipo de Sensor eliminado exitosamente", data: response.rows[0] });
    } else {
      return res.status(404).json({ message: "Tipo de Sensor no encontrado" });
    }
  } catch (error) {
    console.error("Error al eliminar el tipo de sensor:", error.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};
