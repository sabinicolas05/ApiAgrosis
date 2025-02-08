import { client } from '../database/conexion.js';

export const ListarTrazCultivo = async (req, res) => {
  try {
    const response = await client.query('SELECT * FROM "Trazabilidad_cultivo";');
    if (response.rows.length > 0) {
      return res.status(200).json(response.rows);
    } else {
      return res.status(404).json({ message: "Cultivo no encontrados" });
    }
  } catch (err) {
    console.error("Error al obtener datos:", err.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

export const BuscarTrazCultivo = async (req, res) => {
  const Cultivo_id = req.params.id;
  console.log(`ID del cultivo buscado: ${Cultivo_id}`);

  try {
    const response = await client.query('SELECT * FROM "Trazabilidad_cultivo" WHERE id = $1', [Cultivo_id]);
    console.log('Respuesta de la base de datos:', response.rows);

    if (response.rows.length > 0) {
      return res.status(200).json(response.rows[0]);
    } else {
      return res.status(404).json({ message: "Cultivo no encontrado" });
    }
  } catch (err) {
    console.error("Error al obtener datos:", err.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

export const ActualizarTrazCultivo = async (req, res) => {
  const Cultivo_id = req.params.id;
  console.log(`ID del cultivo a actualizar: ${Cultivo_id}`);
  console.log("Cuerpo de la solicitud:", req.body);

  const { nombre, descripcion, cantidad, fecha_siembra, fk_especie_id, fk_semillero_id } = req.body;

  if (!nombre || !descripcion || !cantidad || !fecha_siembra || !fk_especie_id || !fk_semillero_id) {
    return res.status(400).json({ message: "El nombre, descripcion, cantidad, fecha_siembra, fk_especie_id y fk_semillero_id son obligatorios" });
  }

  try {
    const sql = `
      UPDATE "Trazabilidad_cultivo" 
      SET nombre = $1, descripcion = $2, cantidad = $3, fecha_siembra = $4, fk_especie_id = $5, fk_semillero_id = $6
      WHERE id = $7
      RETURNING *;
    `;

    const response = await client.query(sql, [nombre, descripcion, cantidad, fecha_siembra, fk_especie_id, fk_semillero_id, Cultivo_id]);
    console.log('Respuesta de la base de datos:', response.rows);

    if (response.rows.length > 0) {
      return res.status(200).json({ message: "Cultivo actualizado exitosamente", data: response.rows[0] });
    } else {
      return res.status(404).json({ message: "Cultivo no encontrado" });
    }
  } catch (error) {
    console.error("Error al actualizar el cultivo:", error.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

export const RegistrarTrazCultivo = async (req, res) => {
  try {
    console.log("Cuerpo de la solicitud:", req.body);

    const { nombre, descripcion, cantidad, fecha_siembra, fk_especie_id, fk_semillero_id } = req.body;

    if (!nombre || !descripcion || !cantidad || !fecha_siembra || !fk_especie_id || !fk_semillero_id) {
      return res.status(400).json({ message: "El nombre, descripcion, cantidad, fecha_siembra, fk_especie_id y fk_semillero_id son obligatorios" });
    }

    const sql = `
      INSERT INTO "Trazabilidad_cultivo" (nombre, descripcion, cantidad, fecha_siembra, fk_especie_id, fk_semillero_id) 
      VALUES ($1, $2, $3, $4, $5, $6) 
      RETURNING *;
    `;

    const response = await client.query(sql, [nombre, descripcion, cantidad, fecha_siembra, fk_especie_id, fk_semillero_id]);

    return res.status(201).json({ message: "Cultivo registrado exitosamente", data: response.rows[0] });
  } catch (error) {
    console.error("Error al registrar el cultivo:", error.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

export const EliminarTrazCultivo = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "El ID es obligatorio" });
    }

    const sql = `
      DELETE FROM "Trazabilidad_cultivo" 
      WHERE id = $1 
      RETURNING *;
    `;

    const response = await client.query(sql, [id]);

    if (response.rowCount > 0) {
      return res.status(200).json({ message: "Cultivo eliminado exitosamente", data: response.rows[0] });
    } else {
      return res.status(404).json({ message: "Cultivo no encontrado" });
    }
  } catch (error) {
    console.error("Error al eliminar el cultivo:", error.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};
