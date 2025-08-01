const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const allergenSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    intensity: {
        type: Number,
        required: true
    },
    allergenAreas: [{
        type: Schema.Types.ObjectId,
        ref: 'Area'
    }]
});

module.exports = mongoose.model('Allergen', allergenSchema);