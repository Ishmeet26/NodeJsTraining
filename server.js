const express = require('express');

const app = express();
const mongoose = require('mongoose')

app.use(express.json()); //so that it can parse incoming json 

//connecting to db
mongoose.connect("mongodb://127.0.0.1:27017/UserDatabase");
const db = mongoose.connection;

db.on('error', console.error.bind(console, "MongoDb connection error: "));
db.once("open", function () {
  console.log("Connected successful")
});

const userRoutes = require('./routes/user');
app.use('/api/users', userRoutes);


app.listen(3000, () => {
    console.log("Server running at port 3000");
})