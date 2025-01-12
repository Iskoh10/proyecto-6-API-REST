const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL),
      console.log('La BBDD está echando humo 👻');
  } catch (error) {
    console.log('Fallo en la conexión de la BBDD 😡');
  }
};

module.exports = { connectDB };
