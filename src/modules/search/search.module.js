const express = require('express');
const searchModule = express()

searchModule.get('/:query', require('./hooks/get-search'));

module.exports = searchModule;