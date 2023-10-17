/* eslint-disable no-undef */
const express = require('express') 
const path = require('path') 
const cors = require('cors')
const morgan = require('morgan')
const PORT = 3000;
const app = express();


const middleware = (req, res, next) => {
    console.log("doing stuff");
    next();
}

app.use(cors({
    origin: "*"
}))

app.use(morgan('dev'))

app.use(middleware);

app.use(express.json());

const fruits = [];

app.get('/fruits',(req,res)=>{
    res.send(fruits)
})

app.post("/fruits",(req,res)=>{
    console.log(req.body);
    fruits.push(req.body);
    res.send("Route is good!");
})

app.get("/", (req, res) => {
    res.send("here is your valuable data")
    
})


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
});