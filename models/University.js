const { DataTypes } = require('sequelize');
const { sequelize } = require('../utils/db');

const University = sequelize.define('University', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: { type: DataTypes.STRING, allowNull: false },
  location: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING, allowNull: false },
  logo: { type: DataTypes.STRING, allowNull: false },
  phone_number: { type: DataTypes.INTEGER, allowNull: false, unique: true },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Users',
      key: 'id',
    }
  }
});

(async () => {
  try {
    await University.sync({ alter: true });
    console.log("The table for the University model was just (re)created!");
  } catch (error) {
    console.error("Error syncing University model:", error);
  }
})();

module.exports = University;
