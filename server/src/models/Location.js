const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const locationSchema = new Schema({
    voivodeship: {
        type: String,
        required: true
    },
    longitude: {
        type: Number,
        required: true
    },
    latitude: {
        type: Number,
        required: true
    },
    locationUsers: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
})

module.exports = mongoose.model("Location", locationSchema);