const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let studentSchema = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  dob: {
    type: Date
  },
  education: {
    type: String
  },
  location: {
    type: String
  },
  about: {
    type: String
  }
}, {
    collection: 'students'
  })
module.exports = mongoose.model('Student', studentSchema)