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
        const classId = mongoose.Types.ObjectId(id);
        
        const foundClass = await Class.findById(classId);
        
        if (!foundClass) {
            return res.status(404).json({
              status: "error",
              message: "Kelas tidak ditemukan",
            });
          }
      
          res.status(200).json({
            status: "success",
            message: "Berhasil mendapatkan kelas",
            data: foundClass,
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
        const savedClass = await newClass.save();
        res.status(200).json({
            status: "success",
            message: "Artikel berhasil dibuat",
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