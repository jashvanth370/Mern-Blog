const express = require('express')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const postRoutes = require('./route/Posts')
const cors = require('cors')

const app = express();
const PORT = process.env.PORT || 8000
//middlewere
app.use(bodyParser.json())
app.use(cors());

//MongoDB connection
mongoose.connect('mongodb://localhost:27017/blog')
    .then(() => console.log("MOngoDB connection succussfull"))
    .catch(err => console.log("Connection error", err));

//route posts
app.use("/api/posts", postRoutes);

app.listen(PORT, () => {
    console.log(`Server Running localhost:${PORT}`)
})
