const mongoose = require('mongoose');

const ProjectsSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  description: {
  	type: String
  },
  managerId: {
    type: String,
    unique: false,
    required: true
  }
});

module.exports = mongoose.model('Projects', ProjectsSchema);

