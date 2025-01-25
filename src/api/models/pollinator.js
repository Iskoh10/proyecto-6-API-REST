const mongoose = require('mongoose');

const pollinatorSchema = new mongoose.Schema(
  {
    species: { type: String, required: true, unique: true },
    commonName: { type: String },
    category: {
      type: String,
      enum: ['insecto', 'ave', 'mamífero', 'reptil', 'otro'],
      required: true,
      unique: true
    },
    imgUrl: { type: String, required: true }
  },
  {
    timestamps: true,
    collection: 'pollinators'
  }
);

const Pollinator = mongoose.model(
  'pollinators',
  pollinatorSchema,
  'pollinators'
);

module.exports = Pollinator;
