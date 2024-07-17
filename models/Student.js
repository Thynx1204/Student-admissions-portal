const { DataTypes } = require('sequelize');
const { sequelize } = require('../utils/db'); // Adjusted import to ensure proper instance retrieval


const Student = sequelize.define('Student', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  last_name: { type: DataTypes.STRING, allowNull: false },
  first_name: { type: DataTypes.STRING, allowNull: false },
  address: { type: DataTypes.STRING, allowNull: false },
  phone_number: { type: DataTypes.INTEGER, allowNull: false, unique: true },
  sex: { type: DataTypes.STRING, allowNull: false },
  nationality: { type: DataTypes.STRING, allowNull: false },
  birthdate: { type: DataTypes.INTEGER, allowNull: false }, // Changed to DATEONLY for date storage
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
    await Student.sync({ alter: true });
    console.log("The table for the Student model was just (re)created!");
  } catch (error) {
    console.error("Error syncing Student model:", error);
  }
})();

module.exports = Student;
