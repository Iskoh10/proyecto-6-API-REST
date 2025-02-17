const Ecology = require('../models/ecology');
const Plant = require('../models/plant');
const Pollinator = require('../models/pollinator');

const getPlants = async (req, res, next) => {
  try {
    const allPlants = await Plant.find().populate({
      path: 'ecology',
      populate: {
        path: 'pollinators'
      }
    });
    return res.status(200).json(allPlants);
  } catch (error) {
    return res.status(400).json('error');
  }
};

const postPlant = async (req, res, next) => {
  try {
    const newPlant = new Plant(req.body);

    const plantDuplicated = await Plant.findOne({
      species: req.body.species
    });

    if (plantDuplicated) {
      return res.status(400).json('Esta planta ya existe');
    }

    const plantSaved = await newPlant.save();
    return res.status(201).json(plantSaved);
  } catch (error) {
    return res.status(400).json('error, no se pudo publicar');
  }
};

const updatePlant = async (req, res, next) => {
  try {
    const { id } = req.params;
    const previousPlant = await Plant.findById(id);
    const newPlant = new Plant(req.body);
    newPlant._id = id;
    newPlant.ecology = [...previousPlant.ecology];
    const plantUpdated = await Plant.findByIdAndUpdate(id, newPlant, {
      new: true
    });
    return res.status(200).json(plantUpdated);
  } catch (error) {
    return res.status(400).json('error, no se puedo actualizar');
  }
};

const deletePlant = async (req, res, next) => {
  try {
    const { id } = req.params;
    const plantDeleted = await Plant.findByIdAndDelete(id);
    return res.status(200).json(plantDeleted);
  } catch (error) {
    return res.status(400).json('error, no se pudo eliminar');
  }
};

module.exports = { getPlants, postPlant, updatePlant, deletePlant };
