const express = require('express');
require('dotenv').config();
const dbConnexion = require('./utils/db')
const authStudentRouter = require('./routes/authStudentRoute');
const authUniversityRouter = require('./routes/authUniversityRoute');

const app = express();

app.use(express.json());

app.use('/student', authStudentRouter)
app.use('/university', authUniversityRouter)


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(process.env.PORT, () => console.log(`Server running on port http://localhost:${process.env.PORT}`));
