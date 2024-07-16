const express = require('express');
require('dotenv').config();
const dbConnexion = require('./utils/db')
const authRouter = require('./routes/authRoute');

const app = express();

app.use(express.json());

app.use('/', authRouter)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(process.env.PORT, () => console.log(`Server running on port http://localhost:${process.env.PORT}`));
