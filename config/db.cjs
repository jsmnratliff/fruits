const mongoose = require('mongoose');
  

let connectionString = `mongodb+srv://userOne:sKL372bPtsiZKDnw@cluster0.sngzila.mongodb.net/food?retryWrites=true&w=majority`

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
require('dotenv').config();

// log when connected

mongoose.connection.once('open', ()=> {
    console.log('connected to DATABASE');
});