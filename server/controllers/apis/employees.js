'use strict';

const passport = require('passport');
const express = require('express');
const projectsService = require('../../services/employees/projects');

let router = express.Router();

router.get('/projects', passport.authenticate('jwt', { session: false }), projectsService.fetch);

module.exports = router;
