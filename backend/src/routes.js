import express from 'express';
import { celebrate, Segments } from 'celebrate';

import { ngoCreateValidator, profileIndexValidator } from './app/validators/validators';
import ngoController from './app/controllers/ngoController';
import incidentController from './app/controllers/incidentController';
import profileController from './app/controllers/profileController';
import sessionController from './app/controllers/sessionController';

const routes = express.Router();

/**
 * List All NGOs
 */
routes.get('/ngos', ngoController.index);

/**
 * create NGO
 */
routes.post('/ngos', celebrate({ [Segments.BODY]: ngoCreateValidator }), ngoController.store);

/**
 * PROFILE ROUTES
 */

routes.get('/profile', celebrate({ [Segments.HEADERS]: profileIndexValidator }), profileController.index);

/**
 * INCIDENTS ROUTES
 */

/**
 * LIST ALL incidents from NGO
 */
routes.get('/incidents', incidentController.index);

/**
 * CREATE Incident
 */
routes.post('/incidents', incidentController.store);

/**
 * DELETE Incident
 */
routes.delete('/incidents/:id', incidentController.delete);


/**
 * SESSION
 */


/**
 * CREATE SESSION
 */
routes.post('/sessions', sessionController.create);

export default routes;