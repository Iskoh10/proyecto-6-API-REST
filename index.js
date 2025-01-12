require('dotenv').config();
const express = require('express');
const { connectDB } = require('./src/config/db');
const plantsRouter = require('./src/api/routes/plant');
const ecologiesRouter = require('./src/api/routes/ecology');
const pollinatorsRouter = require('./src/api/routes/pollinator');

const app = express();

connectDB();

app.use(express.json());

app.use('/api/v1/plants', plantsRouter);
app.use('/api/v1/ecologies', ecologiesRouter);
app.use('/api/v1/pollinators', pollinatorsRouter);

app.use('*', (req, res, next) => {
  res.status(404).json('Route not found');
});

app.listen(3000, () => {
  console.log('servidor levantado en http://localhost:3000');
});
