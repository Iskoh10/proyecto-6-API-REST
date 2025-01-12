const {
  getPollinators,
  postPollinators,
  updatePollinator,
  deletePollinator
} = require('../controllers/pollinator');

const pollinatorsRouter = require('express').Router();

pollinatorsRouter.get('/', getPollinators);
pollinatorsRouter.post('/', postPollinators);
pollinatorsRouter.put('/:id', updatePollinator);
pollinatorsRouter.delete('/:id', deletePollinator);

module.exports = pollinatorsRouter;
