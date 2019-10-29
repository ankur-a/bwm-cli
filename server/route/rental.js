const express = require('express');
const router = express.Router();
const Rental = require('../models/rental');

router.get('', function(req, res){
    Rental.find({}, function(err, foundRentals){
        res.json(foundRentals);
    });
});

router.get('/:id', function(req, res){
    const rentalID = req.params.id;
    Rental.findById(rentalID, function(err, foundRentals){
        if(err){
            res.status(422).send({errors: [ { title: 'Rental Error', detail: "Not found" } ]});
        }
        else{
        res.json(foundRentals);
        }
    });
});

module.exports = router;