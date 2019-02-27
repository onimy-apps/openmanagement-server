const User = require('../../models/User');
const httpResponses = require('./');
const utils = require('../../utils/admin');

function newEmployee(request, response) {
  if (request.body.access.role.toLowerCase() !== 'admin') {
    return response.json({
      success: false,
      message: 'Only admin can perform this action.'
    });
  }
  
  new User(request.body)
    .save((error, doc) => {
      if (error) return response.json({ success: false, message: error.message });
      response.json({
        success: true,
        message: `${request.body.name} created successfully.`
      });
    });
}

module.exports = {
  new: newEmployee
}