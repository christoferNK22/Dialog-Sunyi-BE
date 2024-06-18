const express = require("express");
const Classes = require("../models/class.model.js");
const router = express.Router();
const {getClasses, getClass, createClass} = require('../controllers/class.controller.js');

router.get('/', getClasses);

router.get('/:id', getClass);

router.post("/", createClass);

module.exports = router;
