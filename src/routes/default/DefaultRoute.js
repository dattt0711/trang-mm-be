
const express = require('express');

const defaultRouter = express.Router();

require('./LoginRoute')(defaultRouter);
require('../auth/ImageRoute')(defaultRouter);

module.exports = defaultRouter;
