import { client } from '../database/conexion.js';

export const ListarFinanzasPago = async (req, res) => {
  try {
    const response = await client.query('SELECT * FROM "Finanzas_pago";');
    if (response.rows.length > 0) {
      return res.status(200).json(response.rows);
    } else {
      return res.status(404).json({ message: "Pagos no encontrados" });
    }
  } catch (err) {
    console.error("Error al obtener datos:", err.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

export const BuscarFinanzasPago = async (req, res) => {
  const FinanzasPago = req.params.id;
  try {
    const response = await client.query('SELECT * FROM "Finanzas_pago" WHERE id = $1', [FinanzasPago]);
    if (response.rows.length > 0) {
      return res.status(200).json(response.rows[0]);
    } else {
      return res.status(404).json({ message: "Pago no encontrado" });
    }
  } catch (err) {
    console.error("Error al obtener datos:", err.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

export const ActualizarFinanzasPago = async (req, res) => {
  const FinanzasPago = req.params.id;
  const { cantidad, fecha, fk_asignacion_actividad_id } = req.body;

  if (!cantidad || !fecha || !fk_asignacion_actividad_id) {
    return res.status(400).json({ message: "Cantidad, fecha y fk_asignacion_actividad_id son obligatorios" });
  }

  try {
    const sql = `
      UPDATE "Finanzas_pago" 
      SET cantidad = $1, fecha = $2, fk_asignacion_actividad_id = $3
      WHERE id = $4
      RETURNING *;
    `;
    const response = await client.query(sql, [cantidad, fecha, fk_asignacion_actividad_id, FinanzasPago]);

    if (response.rows.length > 0) {
      return res.status(200).json({ message: "Pago actualizado exitosamente", data: response.rows[0] });
    } else {
      return res.status(404).json({ message: "Pago no encontrado" });
    }
  } catch (error) {
    console.error("Error al actualizar el pago:", error.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

export const RegistrarFinanzasPago = async (req, res) => {
  try {
    const { cantidad, fecha, fk_asignacion_actividad_id } = req.body;
    if (!cantidad || !fecha || !fk_asignacion_actividad_id) {
      return res.status(400).json({ message: "Cantidad, fecha y fk_asignacion_actividad_id son obligatorios" });
    }

    const sql = `
      INSERT INTO "Finanzas_pago" (cantidad, fecha, fk_asignacion_actividad_id) 
      VALUES ($1, $2, $3) 
      RETURNING *;
    `;
    const response = await client.query(sql, [cantidad, fecha, fk_asignacion_actividad_id]);

    return res.status(201).json({ message: "Pago registrado exitosamente", data: response.rows[0] });
  } catch (error) {
    console.error("Error al registrar el pago:", error.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

export const EliminarFinanzasPago = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ message: "El ID es obligatorio" });
    }

    const sql = `
      DELETE FROM "Finanzas_pago" 
      WHERE id = $1 
      RETURNING *;
    `;
    const response = await client.query(sql, [id]);

    if (response.rowCount > 0) {
      return res.status(200).json({ message: "Pago eliminado exitosamente", data: response.rows[0] });
    } else {
      return res.status(404).json({ message: "Pago no encontrado" });
    }
  } catch (error) {
    console.error("Error al eliminar el pago:", error.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};
