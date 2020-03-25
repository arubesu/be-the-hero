const express = require('express');

const routes = express.Router();

routes.get('/', (req, res) => {
  res.send('GET request to the homepage')
})

module.exports = routes;