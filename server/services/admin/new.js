const User = require('../../models/User');
const httpResponses = require('./');
const utils = require('../../utils/admin');

function newEmployee(request, response) {
  const { id, role } = request.body.access;

  utils.isAdmin(id, role)
    .then(admin => {
      new User(request.body.data)
        .save((error, doc) => {
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
};