import { client } from '../database/conexion.js';

export const ListarFinanzasVenta = async (req, res) => {
  try {
    const response = await client.query('SELECT * FROM "Finanzas_venta";');
    if (response.rows.length > 0) {
      return res.status(200).json(response.rows);
    } else {
      return res.status(404).json({ message: "venta no encontradas" });
    }
  } catch (err) {
    console.error("Error al obtener datos:", err.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

export const BuscarFinanzasVenta = async (req, res) => {
  const Venta_Id = req.params.id;
  console.log(`ID del venta buscado: ${Venta_Id}`);

  try {
    const response = await client.query('SELECT * FROM "Finanzas_venta" WHERE id = $1', [Venta_Id]);
    console.log('Respuesta de la base de datos:', response.rows);

    if (response.rows.length > 0) {
      return res.status(200).json(response.rows[0]);
    } else {
      return res.status(404).json({ message: "venta no encontrada" });
    }
  } catch (err) {
    console.error("Error al obtener datos:", err.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

export const ActualizarFinanzasVenta = async (req, res) => {
  const Venta_Id = req.params.id;
  console.log(`ID de la venta a actualizar: ${Venta_Id}`);
  console.log("Cuerpo de la solicitud:", req.body);

  const { precio_unitario, cantidad_produccion, fecha, fk_produccion_id } = req.body;

  if (!precio_unitario || !cantidad_produccion || !fecha || !fk_produccion_id) {
    return res.status(400).json({ message: "El precio_unitario, cantidad_produccion, fecha, fk_produccion_id son obligatorios" });
  }

  try {
    const sql = `
      UPDATE "Finanzas_venta" 
      SET precio_unitario= $1, cantidad_produccion= $2, fecha= $3, fk_produccion_id= $4
      WHERE id = $5
      RETURNING *;
    `;

    const response = await client.query(sql, [precio_unitario, cantidad_produccion, fecha, fk_produccion_id, Venta_Id]);
    console.log('Respuesta de la base de datos:', response.rows);

    if (response.rows.length > 0) {
      return res.status(200).json({ message: "venta actualizada exitosamente", data: response.rows[0] });
    } else {
      return res.status(404).json({ message: "venta no encontrada" });
    }
  } catch (error) {
    console.error("Error al actualizar la venta:", error.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

export const RegistrarFinanzasVenta = async (req, res) => {
  try {
    console.log("Cuerpo de la solicitud:", req.body);
    const { precio_unitario, cantidad_produccion, fecha, fk_produccion_id } = req.body;

    if (!precio_unitario || !cantidad_produccion || !fecha || !fk_produccion_id) {
      return res.status(400).json({ message: "El precio_unitario, cantidad_produccion, fecha, fk_produccion_id son obligatorios" });
    }

    const sql = `
      INSERT INTO "Finanzas_venta" (precio_unitario, cantidad_produccion, fecha, fk_produccion_id) 
      VALUES ($1, $2, $3, $4) 
      RETURNING *;
    `;

    const response = await client.query(sql, [precio_unitario, cantidad_produccion, fecha, fk_produccion_id]);
    return res.status(201).json({ message: "venta registrada exitosamente", data: response.rows[0] });
  } catch (error) {
    console.error("Error al registrar la venta:", error.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

export const EliminarFinanzasVenta = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "El ID es obligatorio" });
    }

    const sql = `
      DELETE FROM "Finanzas_venta" 
      WHERE id = $1 
      RETURNING *;
    `;

    const response = await client.query(sql, [id]);

    if (response.rowCount > 0) {
      return res.status(200).json({ message: "venta eliminada exitosamente", data: response.rows[0] });
    } else {
      return res.status(404).json({ message: "venta no encontrada" });
    }
  } catch (error) {
    console.error("Error al eliminar la venta:", error.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};
