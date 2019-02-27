const User = require('../../models/User');
const httpResponses = require('./');
const utils = require('../../utils/admin');

function newEmployee(request, response) {
  if (request.body.access.role.toLowerCase() !== 'admin') {
    return response.json(httpResponses.onClientAdminFail);
  }

  utils.isAdmin(request.body.access.id)
    .then(admin => {
      new User(request.body.data)
        .save((error, doc) => {
          console.log(error);
          console.log(doc)
          if (error) {
            return response.json({
              success: false,
              message: error.errmsg
            });
          }
          return response.json({
            success: true,
            message: `${request.body.data.name} created successfully.`
          });
        });
    })
    .catch(err => {
      return response.json(httpResponses.onServerAdminFail);
    });
}

module.exports = {
  new: newEmployee
}