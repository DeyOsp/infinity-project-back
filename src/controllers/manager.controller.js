import getConnection from "../database/connection.mysql.js"
import { variablesDB } from "../utils/params/const.database.js";

// Obtener datos
export const getDataProjectTypes = async (req, res) => {
  const conn = await getConnection();
  const db = variablesDB.data_base;
  const query = `
    SELECT * FROM ${db}.project_types`;
  const select = await conn.query(query);
  if (!select) return res.json({
    status: 500,
    message: 'Error obteniendo los datos'
  });
  return res.json(select[0]);
}

export const getDataCollaborators = async (req, res) => {
  const conn = await getConnection();
  const db = variablesDB.data_base;
  const query = `
    SELECT name, department FROM ${db}.users`;
  const select = await conn.query(query);
  if (!select) return res.json({
    status: 500,
    message: 'Error obteniendo los datos'
  });
  return res.json(select[0]);
}