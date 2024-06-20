const mongoose = require('mongoose');
const Class = require('../models/class.model');

const getClasses =  async (req, res) => {
    try {
        const classess = await Class.find();
        res.status(200).json({
            status: "success",
            message: "Berhasil mendapatkan semua kelas",
            data: classess
        })
    } catch {
        res.status(500).json({message: error.message});
    }
}

const getClass = async (req, res) => {
    try {
        const { id } = req.params;
        
        const foundClass = await Class.findById(id);
        
        if (!foundClass) {
            return res.status(404).json({
              status: "error",
              message: "Kelas tidak ditemukan",
            });
          }

          const response = {
            id: foundClass._id,
            title: foundClass.title,
            organizer: foundClass.organizer,
            region: foundClass.region,
            poster_img: foundClass.poster_img,
            realization_date: foundClass.realization_date,
            registration_date: foundClass.registration_date,
            link: foundClass.link,
            fee: foundClass.fee,
          };
      
          res.status(200).json({
            status: "success",
            message: "Berhasil mendapatkan kelas",
            data: response,
          });
    } catch (error) { 
        console.error(error); 
        res.status(500).json({
          status: "error",
          message: "Kesalahan server", 
        });
      }
};

const createClass = async (req, res) => {
    try {
        const newClass =  await Class.create(req.body);

        if (!newClass.createdAt) {
            newClass.createdAt = new Date();
        }

        if (!newClass.fee) {
            newClass.fee = 0;
        }

        const savedClass = await newClass.save();
        res.status(200).json({
            status: "success",
            message: "Kelas berhasil dibuat",
            data: savedClass,
        });
    } catch (error) {
        res.status(500).json({message: error.message})
    }
};

module.exports = {
    getClasses,
    getClass,
    createClass
};