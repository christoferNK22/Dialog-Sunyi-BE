const express = require("express");
const Classes = require("../models/class.model.js");
const router = express.Router();
const {getClasses, getClass, createClass} = require('../controllers/class.controller.js');

router.get('/classes', getClasses);

router.get('/class/:id', getClass);

router.post("/class/", createClass);

module.exports = router;
