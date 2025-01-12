const {
  getEcologies,
  postEcology,
  deleteEcology,
  updateEcology
} = require('../controllers/ecology');

const ecologiesRouter = require('express').Router();

ecologiesRouter.get('/', getEcologies);
ecologiesRouter.post('/', postEcology);
ecologiesRouter.put('/:id', updateEcology);
ecologiesRouter.delete('/:id', deleteEcology);

module.exports = ecologiesRouter;
