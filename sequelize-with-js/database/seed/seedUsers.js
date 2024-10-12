// database/seed/seedUsers.js
import { User } from '../models/User.js';

const seedUsers = async () => {
  await User.create({
    firstName: 'Alice',
    lastName: 'Johnson',
  });
};

export { seedUsers };
