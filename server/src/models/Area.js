const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const areaSchema = new Schema({
    district: {
        type: String,
        required: true
    },
    areaUsers: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    areaAllergens: [{
        type: Schema.Types.ObjectId,
        ref: 'Allergen'
    }]
});

module.exports = mongoose.model('Area', areaSchema);