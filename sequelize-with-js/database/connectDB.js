import { sequelizeInstance } from './sequelizeInstance.js';
import { seedDB } from './seedDB.js';

const connectDB = async () => {
  try {
    if (!sequelizeInstance) {
      await sequelizeInstance.authenticate();
      console.log('Sequelize connected successfully.');

      // This will create the models if it doesn't exist
      await sequelizeInstance.sync({ force: false });
      console.log('User table synchronized successfully.');

      await seedDB();
    }
  } catch (error) {
    console.error('Unable to connect to the database', {
      error: error.message,
    });
    throw new Error(`Database connection failed: ${error.message}`);
  }
};

export { connectDB };
