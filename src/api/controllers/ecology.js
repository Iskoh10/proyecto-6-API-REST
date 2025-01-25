const Ecology = require('../models/ecology');

const postEcology = async (req, res, next) => {
  try {
    const newEcology = new Ecology(req.body);
    const ecologySaved = await newEcology.save();
    return res.status(201).json(ecologySaved);
  } catch (error) {
    return res.status(400).json('error, no se pudo publicar');
  }
};

const getEcologies = async (req, res, next) => {
  try {
    const allEcologies = await Ecology.find()
      .populate('plantId')
      .populate('pollinators');
    return res.status(200).json(allEcologies);
  } catch (error) {
    return res.status(400).json('error');
  }
};

const updateEcology = async (req, res, next) => {
  try {
    const { id } = req.params;
    const previousEcology = await Ecology.findById(id);
    const newEcology = new Ecology(req.body);
    newEcology._id = id;
    newEcology.plantId = [...previousEcology.plantId];
    newEcology.pollinators = [...previousEcology.pollinators];

    const ecologyUpdated = await Ecology.findByIdAndUpdate(id, newEcology, {
      new: true
    });
    return res.status(200).json(ecologyUpdated);
  } catch (error) {
    return res.status(400).json('error, no se pudo actualizar');
  }
};

const deleteEcology = async (req, res, next) => {
  try {
    const { id } = req.params;
    const ecologyDeleted = await Ecology.findByIdAndDelete(id);
    return res.status(200).json(ecologyDeleted);
  } catch (error) {
    return res.status(400).json('error, no se pudo eliminar');
  }
};

module.exports = { getEcologies, postEcology, updateEcology, deleteEcology };
