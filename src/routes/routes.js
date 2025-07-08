import express from 'express';

// Middlewares
import { AuthorizationVerify } from '../middlewares/authorization.js';
import { ConexionVerify } from '../middlewares/connection.js';

// Controladores
import { getDataProjectTypes, getDataCollaborators, getDataProjectIdea, getDataProjectFreelance, saveProjectIdea, saveProjectFreelance, getDataProjectActive, updateActive, getDataProjectDetails, saveTaskIdea, updateTaskStatus } from '../controllers/manager.controller.js';

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
    router.get('/manager/g/project-details/:project_id', AuthorizationVerify, getDataProjectDetails);
    router.post('/manager/i/add-project-idea', AuthorizationVerify, saveProjectIdea);
    router.post('/manager/i/add-project-freelance', AuthorizationVerify, saveProjectFreelance);
    router.post('/manager/i/add-project-task', AuthorizationVerify, saveTaskIdea);
    router.put('/manager/u/active-idea', AuthorizationVerify, updateActive);
    router.put('/manager/u/status-task', AuthorizationVerify, updateTaskStatus);


    // Database
    router.get('/conect/', ConexionVerify, getConnect);
    return router;
}