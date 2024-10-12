// database/models/User.js
import { sequelizeInstance } from '../sequelizeInstance.js';
import { DataTypes, Model } from 'sequelize';

console.log('database/models/User.js');

class User extends Model {}

User.init(
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: 'User',
  }
);

export { User };
