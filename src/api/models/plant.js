const mongoose = require('mongoose');

const plantSchema = new mongoose.Schema(
  {
    kingdom: { type: String, required: true },
    phylum: { type: String, required: true },
    family: { type: String, required: true },
    species: { type: String, required: true, unique: true },
    commonName: { type: String },
    characteristics: [{ type: String }],
    imgUrl: { type: String, required: true },
    ecology: [
      {
        type: mongoose.Types.ObjectId,
        required: false,
        ref: 'ecologies'
      }
    ]
  },
  {
    timestamps: true,
    collection: 'plants'
  }
);

const Plant = mongoose.model('plants', plantSchema, 'plants');

module.exports = Plant;
