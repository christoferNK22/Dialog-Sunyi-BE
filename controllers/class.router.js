const Class = require('../models/class.model');

const getClasses =  async (req, res) => {
    try {
        const classess = await Class.find();
        res.status(200).json(classess)
    } catch {
        res.status(500).json({message: error.message});
    }
}

const getClass = async (req, res) => {
    try {
        const { id } = req.params;
        const classes = await Class.findById(id);
        res.status(200).json(classes)
    } catch {
        res.status(500).json({message: error.message});
    }
};

const createClass = async (req, res) => {
    try {
        const classes =  await Class.create(req.body);
        res.status(200).json(classes)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
};

module.exports = {
    getClasses,
    getClass,
    createClass
};