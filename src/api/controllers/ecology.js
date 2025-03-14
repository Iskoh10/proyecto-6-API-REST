const Ecology = require('../models/ecology');

const postEcology = async (req, res, next) => {
  try {
    const { plantId, pollinators } = req.body;
    const newEcology = new Ecology(req.body);

    const relationDuplicated = await Ecology.findOne({
      plantId: plantId,
      pollinators: { $in: pollinators }
    });

    if (relationDuplicated) {
      return res.status(400).json('Esta relación ya existe');
    }

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
    const newEcology = new Ecology(req.body);
    newEcology._id = id;

    const ecologyUpdated = await Ecology.findByIdAndUpdate(
      id,
      {
        $addToSet: {
          plantId: { $each: newEcology.plantId },
          pollinators: { $each: newEcology.pollinators }
        }
      },
      { new: true }
    );
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
