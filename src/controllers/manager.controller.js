import getConnection from "../database/connection.mysql.js"
import { variablesDB } from "../utils/params/const.database.js";
import { responseQueries } from "../common/enum/queries/response.queries.js";

// Obtener tipos de proyectos
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

// Obtener ideas de proyectos
export const getDataProjectIdea = async (req, res) => {
  const conn = await getConnection();
  const db = variablesDB.data_base;
  const query = `
    SELECT id, title, description FROM ${db}.projects WHERE activate = 0`;
  const select = await conn.query(query);
  if (!select) return res.json({
    status: 500,
    message: 'Error obteniendo los datos'
  });
  return res.json(select[0]);
}

// Guardar idea
export const saveProjectIdea = async (req, res) => {
  const { title, description, type_id } = req.body;

  if (!title || !description || !type_id) {
    return res.json(responseQueries.error({ message: "Datos incompletos" }));
  }

  const conn = await getConnection();
  const db = variablesDB.data_base;

  const insert = await conn.query(
    `INSERT INTO ${db}.projects (title, description, type_id) VALUES (?, ?, ?)`,
    [title, description, type_id]
  );

  if (!insert) return res.json(responseQueries.error({ message: "Error al crear la idea" }));

  return res.json(responseQueries.success({ message: "Idea creada con éxito" }));
};

// Obtener proyectos freelance
export const getDataProjectFreelance = async (req, res) => {
  const conn = await getConnection();
  const db = variablesDB.data_base;
  const query = `
    SELECT id, title, description, progress, status FROM ${db}.projects WHERE type_id = 2`;
  const select = await conn.query(query);
  if (!select) return res.json({
    status: 500,
    message: 'Error obteniendo los datos'
  });
  return res.json(select[0]);
}

// Guardar freelance
export const saveProjectFreelance = async (req, res) => {
  const { title, description, type_id, status, activate } = req.body;

  if (!title || !description || !type_id || !status || !activate) {
    return res.json(responseQueries.error({ message: "Datos incompletos" }));
  }

  const conn = await getConnection();
  const db = variablesDB.data_base;

  const insert = await conn.query(
    `INSERT INTO ${db}.projects (title, description, type_id, status, activate) VALUES (?, ?, ?, ?, ?)`,
    [title, description, type_id, status, activate]
  );

  if (!insert) return res.json(responseQueries.error({ message: "Error al crear el proyecto freelance" }));

  return res.json(responseQueries.success({ message: "Proyecto freelance creado con éxito" }));
};

// Obtener proyectos activos
export const getDataProjectActive = async (req, res) => {
  const conn = await getConnection();
  const db = variablesDB.data_base;
  const query = `
    SELECT id, title, description, progress, status FROM ${db}.projects WHERE activate = 1`;
  const select = await conn.query(query);
  if (!select) return res.json({
    status: 500,
    message: 'Error obteniendo los datos'
  });
  return res.json(select[0]);
}

// Activar los proyectos

export const updateActive = async (req, res) => {
  // const { id } = req.params;
  // const data = JSON.parse(req.body.data);
  const { id } = req.body;

  if (!id) {
    return res.json(responseQueries.error({ message: "Datos incompletos" }));
  }

  try {
    const conn = await getConnection();
    const db = variablesDB.data_base;

    const update = await conn.query(
      `UPDATE ${db}.projects SET status = "starting", activate = 1 WHERE id = ?;`,
      [id]
    );

    if (update.affectedRows === 0) {
      return res.json(responseQueries.error({ message: "No se encontró la idea" }));
    }

    return res.json(responseQueries.success({ message: "Idea activada con éxito" }));
  } catch (error) {
    return res.json(responseQueries.error({ message: "Error al activar la idea", error }));
  }
};

// Obtener colaboradores
export const getDataCollaborators = async (req, res) => {
  const conn = await getConnection();
  const db = variablesDB.data_base;
  const query = `
    SELECT id, name, department FROM ${db}.users`;
  const select = await conn.query(query);
  if (!select) return res.json({
    status: 500,
    message: 'Error obteniendo los datos'
  });
  return res.json(select[0]);
}