import { connectDB } from './database/connectDB.js';
import { User } from './database/models/User.js';

// fetchUser, fetchProfessors, etc.
async function fetchUser() {
  await connectDB();

  try {
    const users = await User.findAll();
    console.log(
      'All users:',
      users.map((u) => u.toJSON())
    );
  } catch (error) {
    console.error('Error creating or accessing sample User:', error);
  }
}

fetchUser();
