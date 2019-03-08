const mongoose = require('mongoose');

const ProjectsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  id: {
    type: String,
    unique: true,
    required: true
  }
});

module.exports = mongoose.model('Projects', ProjectsSchema);

