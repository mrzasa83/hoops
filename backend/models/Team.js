const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Team = new Schema({
   name: {
      type: String
   },
   color: {
      type: String
   }
}, {
   collection: 'teams'
})

module.exports = mongoose.model('Team', Team)