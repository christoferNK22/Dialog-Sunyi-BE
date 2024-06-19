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
        region: {
            type: String,
            required: true
        },
        realization_date: {
            type: Date, 
            required: Date.now
        },
        registration_date: {
            type: Date,
            required: Date.now
        },
        poster_img: {
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
