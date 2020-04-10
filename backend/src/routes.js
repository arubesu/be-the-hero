import express from 'express';
import { celebrate, Segments } from 'celebrate';

import { ngoCreateValidator, profileIndexValidator, sessionValidator } from './app/validators/validators';
import NgoController from './app/controllers/NgoController';
import IncidentController from './app/controllers/IncidentController';
import ProfileController from './app/controllers/ProfileController';
import SessionController from './app/controllers/SessionController';
import Ngo from './app/models/Ngo';

const routes = express.Router();

/**
 * List All NGOs
 */
routes.get('/ngos', NgoController.index);

/**
 * create NGO
 */
routes.post('/ngos',
  celebrate({ [Segments.BODY]: ngoCreateValidator }), NgoController.store);


/**
 * PROFILE ROUTES
 */

routes.get('/profile', celebrate({ [Segments.HEADERS]: profileIndexValidator }), ProfileController.index);

/**
 * INCIDENTS ROUTES
 */

/**
 * LIST ALL incidents from NGO
 */
routes.get('/incidents', IncidentController.index);

/**
 * CREATE Incident
 */
routes.post('/incidents', IncidentController.store);

/**
 * DELETE Incident
 */
routes.delete('/incidents/:id', IncidentController.delete);


/**
 * SESSION
 */


/**
 * CREATE SESSION
 */
routes.post('/sessions', celebrate({ [Segments.BODY]: sessionValidator }), SessionController.create);

export default routes;