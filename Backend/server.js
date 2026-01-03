const express = require('express');
const cors = require('cors')
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const tasks = require('./Routes/task')
const PORT = process.env.PORT || 3000;
dotenv.config()

app.use(express.json())
app.use(cors())
app.use('/api/tasks', tasks)

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is Listening at http://localhost${PORT} and database is connected`)
        })
    })
    .catch((error) => {
        console.log(error)
    })


// update
