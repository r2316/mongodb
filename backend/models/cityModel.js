const mongoose = require("mongoose");

const citySchema = new mongoose.Schema({
    name: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },
    population: { type: Number, required: true },
    area: { type: Number, required: true },
    officiallanguage: { type: String, required: true },
    metro: { type: Boolean, default: false }
});

citySchema.index({ name: 1, state: 1 }, { unique: true }); 

module.exports = mongoose.model("City", citySchema);
