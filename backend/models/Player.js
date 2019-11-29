const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Player = new Schema({
   firstname: {
      type: String
   },
   lastname: {
      type: String
   },
   email: {
      type: String
   },
   suggestRoundPick: {
      type: String
   },
   suggestedComments: {
      type: String
   },
   status: {
      type: String
   },
   position: {
      type: String
   },
   phoneNumber: {
      type: Number
   }
}, {
   collection: 'players'
})

module.exports = mongoose.model('Player', Player)