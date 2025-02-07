
import { client } from '../database/conexion.js';


export const ListarFinanzasProduccion = async (req, res) => {
  try {
    const response = await client.query('SELECT * FROM "Finanzas_produccion";');
    if (response.rows.length > 0) {
      return res.status(200).json(response.rows); 
    } else {
      return res.status(404).json({ message: "Finanzas_produccion  no encontrados" }); 
    }
  } catch (err) {
    console.error("Error al obtener datos:", err.stack);
    return res.status(500).json({ message: "Error en el sistema" }); 
  }
};




export const BuscarFinanzasProduccion = async (req, res) => {
  const produccion_Id = req.params.id; 
  console.log(`ID del Finanzas_produccion  buscado: ${produccion_Id}`); 

  try {
    const response = await client.query('SELECT * FROM "Finanzas_produccion" WHERE id = $1', [produccion_Id]);
    console.log('Respuesta de la base de datos:', response.rows); 

    if (response.rows.length > 0) {
      return res.status(200).json(response.rows[0]); 
    } else {
      return res.status(404).json({ message: "Finanzas_produccion  no encontrado" }); 
    }
  } catch (err) {
    console.error("Error al obtener datos:", err.stack);
    return res.status(500).json({ message: "Error en el sistema" }); 
  }
};




export const ActualizarFinanzasProduccion = async (req, res) => {
  const produccion_Id = req.params.id; 
  console.log(`ID del Finanzas_produccion  a actualizar: ${produccion_Id}`); 

  console.log("Cuerpo de la solicitud:", req.body);

  const { nombre,  precio, contenido, unidades, fk_cultivo_id, fk_usuario_id } = req.body;

  if (!nombre ||  !precio || !contenido || !unidades || !fk_cultivo_id || !fk_usuario_id   ) {
    return res.status(400).json({ message: "El nombre, precio, contenido, unidades, fk_cultivo_id, fk_usuario_id son obligatorios" });
  }

  try {
    const sql = `
      UPDATE "Finanzas_produccion" 
      SET nombre = $1,  precio = $2, contenido = $3, unidades = $4, fk_cultivo_id = $5, fk_usuario_id = $6
      WHERE id = $7
      RETURNING *;
    `;

    const response = await client.query(sql, [ nombre, precio, contenido, unidades, fk_cultivo_id, fk_usuario_id, produccion_Id]);
    console.log('Respuesta de la base de datos:', response.rows); 

    if (response.rows.length > 0) {
      return res.status(200).json({ message: "Finanzas_produccion  actualizado exitosamente", data: response.rows[0] });
    } else {
      return res.status(404).json({ message: "Finanzas_produccion  no encontrado" }); 
    }
  } catch (error) {
    console.error("Error al actualizar el Finanzas_produccion :", error.stack);
    return res.status(500).json({ message: "Error en el sistema" }); 
  }
}; 



export const RegistrarFinanzasProduccion = async (req, res) => {
  try {
    console.log("Cuerpo de la solicitud:", req.body);

    const { nombre, precio, contenido, unidades, fk_cultivo_id, fk_usuario_id} = req.body;

    if (!nombre || !precio || !contenido || !unidades || !fk_cultivo_id || !fk_usuario_id ) {
      return res.status(400).json({ message: "El nombre y precio, contenido, unidades, fk_cultivo_id, fk_usuario_id son obligatorios" });
    }

    const sql = `
      INSERT INTO "Finanzas_produccion" ( nombre, precio, contenido, unidades, fk_cultivo_id, fk_usuario_id ) 
      VALUES ($1, $2, $3, $4, $5, $6) 
      RETURNING *;
    `;

    const response = await client.query(sql, [ nombre, precio, contenido, unidades, fk_cultivo_id, fk_usuario_id ]);

    return res.status(201).json({ message: "Finanzas_produccion  registrado exitosamente", data: response.rows[0] });
  } catch (error) {
    console.error("Error al registrar el Finanzas_produccion", error.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};




export const EliminarFinanzasProduccion = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "El ID es obligatorio" });
    }

    const sql = `
      DELETE FROM "Finanzas_produccion" 
      WHERE id = $1 
      RETURNING *;
    `;

    const response = await client.query(sql, [id]);

    if (response.rowCount > 0) {
      return res.status(200).json({ message: "Finanzas_produccion  eliminado exitosamente", data: response.rows[0] });
    } else {
      return res.status(404).json({ message: "Finanzas_produccion  no encontrado" });
    }
  } catch (error) {
    console.error("Error al eliminar la Finanzas_produccion :", error.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};


  