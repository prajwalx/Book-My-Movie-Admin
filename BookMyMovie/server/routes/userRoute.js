var express = require('express');
var router=express.Router();
var Theatre = require('../model/theatre');
var Movie = require('../model/movie');

router.post('/EditUser/:id', function (req,res) {
  Theatre.findOneAndUpdate({_id:req.params.id},{
    TheatreName: req.body.TheatreName,
    State: req.body.State,
    City: req.body.City,
    Seats: req.body.Seats
  }, function (err,data) {
    if (err) {
      throw err;
    }
    else {
      console.log('Data Updated Successfully');
      res.send('Data Updated');
    }

  });
});

router.get('/FindUser/:id',function (req,res) {
  Theatre.find({_id:req.params.id},function (err,data) {
    if (err) {
  throw err;
    }
    else {
      res.json(data);
    }
  });

});

router.get('/GetUser',function (req,res) {
  Theatre.find({},function (err,data) {
    if(err)
    throw err;
    else{
      res.json(data);
    }
  });

});
router.delete('/DeleteUser/:id',function (req,res) {
  Theatre.remove({_id:req.params.id}, function (err,docs) {
    if(err)
    throw err;
    else {
      console.log('Theatre Removed SuccessFully');
      res.send('Theatre Removed Successfully');
    }
  });

});
router.post('/SaveUser',function (req,res) {
  myTheatre = new Theatre();
  myTheatre.TheatreName=req.body.TheatreName;
  myTheatre.State=req.body.State;
  myTheatre.City=req.body.City;
  myTheatre.Seats=req.body.Seats;
  myTheatre.save(function (err,docs) {
    if(err)
    throw err;
    else {
      console.log('Theatre Data Inserted SuccessFully');
      res.send('Theatre Data Inserted SuccessFully');
    }

  });

});

router.post('/SaveMovie',function (req,res) {
  mo = new Movie();
  mo.Poster=req.body.cov;
  mo.Title=req.body.title;
  mo.Actors=req.body.cast;
  mo.Duration=req.body.dur;
  mo.Genre=req.body.gen;
  mo.Directors=req.body.director;
  mo.Id=req.body.id;

  mo.save(function (err,docs) {
    if(err)
    throw err;
    else {
      console.log('Data Inserted SuccessFully');
      res.send('Data Inserted SuccessFully');
    }

  });

});

module.exports = router;
