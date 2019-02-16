const User = require('../../models/User');

function newEmployee(request, response) {
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