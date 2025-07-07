import express from 'express';

// Middlewares
import { AuthorizationVerify } from '../middlewares/authorization.js';
import { ConexionVerify } from '../middlewares/connection.js';

// Controladores
import { getDataProjectTypes, getDataCollaborators, getDataProjectIdea, getDataProjectFreelance, saveProjectIdea, saveProjectFreelance, getDataProjectActive, updateActive } from '../controllers/manager.controller.js';

// Database
import { getConnect } from '../database/conection.controller.js';

const router = express();

export const routes = () => {
    // Rutas

    router.get('/manager/g/project-types', AuthorizationVerify, getDataProjectTypes);
    router.get('/manager/g/collaborators', AuthorizationVerify, getDataCollaborators);
    router.get('/manager/g/project-idea', AuthorizationVerify, getDataProjectIdea);
    router.get('/manager/g/project-freelance', AuthorizationVerify, getDataProjectFreelance);
    router.get('/manager/g/project-active', AuthorizationVerify, getDataProjectActive);
    router.post('/manager/i/add-project-idea', AuthorizationVerify, saveProjectIdea);
    router.post('/manager/i/add-project-freelance', AuthorizationVerify, saveProjectFreelance);
    router.put('/manager/u/active-idea', AuthorizationVerify, updateActive);

    // Database
    router.get('/conect/', ConexionVerify, getConnect);
    return router;
}