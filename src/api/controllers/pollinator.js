const Pollinator = require('../models/pollinator');

const postPollinators = async (req, res, next) => {
  try {
    const newpollinator = new Pollinator(req.body);
    const pollinatorSaved = await newpollinator.save();
    return res.status(201).json(pollinatorSaved);
  } catch (error) {
    return res.status(400).json('error, no se pudo publicar');
  }
};

const getPollinators = async (req, res, next) => {
  try {
    const allPollinators = await Pollinator.find();
    return res.status(200).json(allPollinators);
  } catch (error) {
    return res.status(400).json('Error');
  }
};

const updatePollinator = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newPollinator = new Pollinator(req.body);
    newPollinator._id = id;

    const pollinatorUpdated = await Pollinator.findByIdAndUpdate(
      id,
      newPollinator,
      {
        new: true
      }
    );
    return res.status(200).json(pollinatorUpdated);
  } catch (error) {
    return res.status(400).json('error, no se pudo actualizar');
  }
};

const deletePollinator = async (req, res, next) => {
  try {
    const { id } = req.params;
    const pollinatorDeleted = await Pollinator.findByIdAndDelete(id);
    return res.status(200).json(pollinatorDeleted);
  } catch (error) {
    return res.status(400).json('error, no se pudo eliminar');
  }
};

module.exports = {
  getPollinators,
  postPollinators,
  updatePollinator,
  deletePollinator
};
