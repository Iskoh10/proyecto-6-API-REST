require('dotenv').config();
const mongoose = require('mongoose');
const Plant = require('../../api/models/plant');
const plants = require('../../data/plants');

const launchSeed = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);

    await Plant.collection.drop();
    console.log('Plantas eliminadas');

    await Plant.insertMany(plants);
    console.log('Plantas introducidas');

    await mongoose.disconnect();
    console.log('Desconectamos de la BBDD');
  } catch (error) {
    console.log('Hubo un error en el lanzamiento de semilla');
  }
};

launchSeed();
