const mongoose = require('mongoose');

const ClassSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "please enter title"]
        },
        organizer: {
            type: String,
            required: true
        },
        realizationDate: {
            type: Date, 
            required: true
        },
        registrationDate: {
            type: Date,
            required: true
        },
        posterImg: {
            type: String,
            required: true
        },
        link: {
            type: String,
            required: true 
        },
        fee: {
            type: Number,
            required: false,
            default: 0
        }
    },
    {
        timestamps: true,
    }
);

const Class = mongoose.model("Class", ClassSchema)

module.exports = Class
