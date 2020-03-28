const express = require('express');
const routes = express.Router();

const ngoController = require('./app/controllers/ngoController');
const incidentController = require('./app/controllers/incidentController');

/**
 * List All NGOs
 */
routes.get('/ngos', ngoController.index);

/**
 * create NGO
 */
routes.post('/ngos', ngoController.store);

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

module.exports = routes;