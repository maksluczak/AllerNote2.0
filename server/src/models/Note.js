const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noteSchema = new Schema({
    date: {
        type: Date, 
        default: Date.now,
        required: true
    },
    well_being: {
        type: Number, min: 0, max: 5,
        default: 0
    },
    headache: {
        type: Number, min: 0, max: 5,
        default: 0
    },
    runny_nose: {
        type: Number, min: 0, max: 5,
        default: 0
    },
    itchy_nose: {
        type: Number, min: 0, max: 5,
        default: 0
    },
    itchy_eyes: {
        type: Number, min: 0, max: 5,
        default: 0
    },
    cough: {
        type: Number, min: 0, max: 5,
        default: 0
    },
    free_note: {
        type: String,
        default: ''
    },
    note_date: {
        type: String,
        required: true
    },  
    noteUser: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

module.exports = mongoose.model('Note', noteSchema);