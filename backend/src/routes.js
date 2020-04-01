const express = require('express');
const { celebrate, Segments } = require('celebrate');

const { ngoCreateValidator, profileIndexValidator } = require('./app/validators/validators')
const ngoController = require('./app/controllers/ngoController');
const incidentController = require('./app/controllers/incidentController');
const profileController = require('./app/controllers/profileController');
const sessionController = require('./app/controllers/sessionController');

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

module.exports = routes;