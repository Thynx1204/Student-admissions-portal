const { sequelize } = require('./utils/db');

(async () => {
  try {
    await sequelize.sync({ alter: true });
    console.log('Database & tables created!');
  } catch (error) {
    console.error('Unable to create tables, shutting down...', error);
  }
})();
