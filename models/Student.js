const { DataTypes } = require('sequelize');
const {sequelize} = require('../utils/db');

const Student = sequelize.define('Student', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  last_name: { type: DataTypes.STRING, allowNull: false },
  first_name:  { type: DataTypes.STRING, allowNull: false },
  address:  { type: DataTypes.STRING, allowNull: false },
  email:  { type: DataTypes.STRING, allowNull: false, unique: true },
  password: { type: DataTypes.STRING,allowNull: false},
  phone_number:  { type: DataTypes.INTEGER, allowNull: false, unique: true },
  sex:  { type: DataTypes.STRING, allowNull: false },
  nationality:  { type: DataTypes.STRING, allowNull: false },
  birthdate: { type: DataTypes.INTEGER, allowNull: false }
});

Student.sync({ alter : true})

module.exports = Student;
