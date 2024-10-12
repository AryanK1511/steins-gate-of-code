// database/seedDB.js
import { seedUsers } from './seed/seedUsers.js';

const seedDB = async () => {
  await seedUsers();
  // call the other seedFunctions to populate
};

export { seedDB };
