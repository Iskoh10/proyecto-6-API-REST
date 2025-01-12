const {
  getPlants,
  postPlant,
  deletePlant,
  updatePlant
} = require('../controllers/plant');

const plantsRouter = require('express').Router();

plantsRouter.get('/', getPlants);
plantsRouter.post('/', postPlant);
plantsRouter.put('/:id', updatePlant);
plantsRouter.delete('/:id', deletePlant);

module.exports = plantsRouter;
