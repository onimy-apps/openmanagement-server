'use strict';

const passport = require('passport');
const express = require('express');
const createService = require('../../services/managers/create');

let router = express.Router();

router.post('/projects/create', passport.authenticate('jwt', { session: false }), createService.create);

module.exports = router;
