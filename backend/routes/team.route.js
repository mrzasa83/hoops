const express = require('express');
const app = express();
const teamRoute = express.Router();

// Team model
let Team = require('../models/Team');

// Add Team
teamRoute.route('/create').post((req, res, next) => {
  Team.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get All Teams
teamRoute.route('/').get((req, res) => {
  Team.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single Team
teamRoute.route('/read/:id').get((req, res) => {
  Team.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update team
teamRoute.route('/update/:id').put((req, res, next) => {
  Team.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Data updated successfully')
    }
  })
})

// Delete team
teamRoute.route('/delete/:id').delete((req, res, next) => {
  Team.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = teamRoute;