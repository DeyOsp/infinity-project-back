import express from 'express';

// Middlewares
import { AuthorizationVerify } from '../middlewares/authorization.js';
import { ConexionVerify } from '../middlewares/connection.js';

// Controladores
import { getDataProjectTypes, getDataCollaborators } from '../controllers/manager.controller.js';

// Database
import { getConnect } from '../database/conection.controller.js';

const router = express();

export const routes = () => {
    // Rutas

    router.get('/manager/g/project-types', AuthorizationVerify, getDataProjectTypes);
    router.get('/manager/g/collaborators', AuthorizationVerify, getDataCollaborators);

    // Database
    router.get('/conect/', ConexionVerify, getConnect);
    return router;
}