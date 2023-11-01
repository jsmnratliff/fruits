
/* eslint-disable no-undef */
const express = require('express')
const path = require('path')
const cors = require('cors')
const morgan = require('morgan')
const PORT = 3000;
const app = express();

const Veggie = require('./models/Veggies.cjs')
const Fruit = require('./models/Fruit.cjs')


// allows us to use process.env (get variables from .env file)
require('dotenv').config();


require('./config/db.cjs');


app.use(cors({
    origin: "*"
}))

app.use(morgan('dev'))



// get /  SENDS REACT APP
app.use(express.static(path.join(__dirname, "dist"))) // how we server our final built version (dist)

app.use(express.json()); // adds .body to the request




// app.get("/fruits",  async (req, res) => {
//     let fruitsFromDB = await Fruit.find()
//     res.send(fruitsFromDB);
// });
app.get("/fruits",   (req, res) => {
    Fruit.find().then((fruitsFromDB) => {
        console.log(fruitsFromDB)
        res.send(fruitsFromDB);
    })
});


app.get("/", (req, res) => {
    res.send("here is your valuable data")
})

app.post("/fruits", async (req,res) => {
    console.log(req.body);
    let fruit = req.body;
   let responseFromDB = await Fruit.create(fruit);
   console.log(responseFromDB);
    res.status(201).send(responseFromDB)
})


app.post("/veggies", async (req, res) => {
// make Veggie model
   let dbResponse =  await Veggie.create(req.body);
   // the created object
   res.status(201).send(dbResponse)
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
});