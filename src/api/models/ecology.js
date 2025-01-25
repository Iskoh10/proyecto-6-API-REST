const mongoose = require('mongoose');

const ecologySchema = new mongoose.Schema(
  {
    plantId: [
      {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'plants'
      }
    ],
    pollinators: [{ type: mongoose.Types.ObjectId, ref: 'pollinators' }],
    associatedSpecies: {
      type: String,
      required: true
    },
    invasiveStatus: { type: Boolean }
  },
  {
    timestamps: true,
    collection: 'ecologies'
  }
);

const Ecology = mongoose.model('ecologies', ecologySchema, 'ecologies');

module.exports = Ecology;
