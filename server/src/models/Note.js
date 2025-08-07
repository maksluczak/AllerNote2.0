const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noteSchema = new Schema({
    date: {
        type: Date, 
        default: Date.now,
        required: true
    },
    wellBeing: {
        type: Number, min: 0, max: 5,
        default: 0
    },
    headache: {
        type: Number, min: 0, max: 5,
        default: 0
    },
    runnyNose: {
        type: Number, min: 0, max: 5,
        default: 0
    },
    itchyNose: {
        type: Number, min: 0, max: 5,
        default: 0
    },
    itchyEyes: {
        type: Number, min: 0, max: 5,
        default: 0
    },
    cough: {
        type: Number, min: 0, max: 5,
        default: 0
    },
    freeNote: {
        type: String,
        default: ''
    },
    noteDate: {
        type: String,
        default: '',
        required: true
    },  
    noteUser: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

module.exports = mongoose.model('Note', noteSchema);