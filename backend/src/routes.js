const express = require('express');
const routes = express.Router();

const ngoController = require('./app/controllers/ngoController');
const incidentController = require('./app/controllers/incidentController');
const profileController = require('./app/controllers/profileController');
const sessionController = require('./app/controllers/sessionController');

/**
 * List All NGOs
 */
routes.get('/ngos', ngoController.index);

/**
 * create NGO
 */
routes.post('/ngos', ngoController.store);

/**
 * PROFILE ROUTES
 */

routes.get('/profile', profileController.index);

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

module.exports = routes;