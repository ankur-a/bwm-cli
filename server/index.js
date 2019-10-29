const express = require('express');
const mongoose =  require('mongoose');
const config = require('./config/dev');
const Rental = require('./models/rental');
const fakeDb = require('./models/fake-db');

const rentalRoutes = require('./route/rental');

mongoose.connect(config.DB_URI).then( () => {
    const fkdb = new fakeDb;
    fkdb.seedDB();   
});


const app = express();

app.use('/api/v1/rentals', rentalRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, function(){
    console.log('----------------------Running-------------------------');
});