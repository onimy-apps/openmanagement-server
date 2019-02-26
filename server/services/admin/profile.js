const User = require('../../models/User');
const httpResponses = require('./');

function fetch(request, response) {
  User.findOne({ _id: request.query.id }).lean().exec((error, user) => {
    if (error) return response.json(error);
    delete user.password;
    return response.json(user);
  });
}

function update(request, response) {
  if (request.body.access.role !== 'Admin') {
    return response.json(httpResponses.onClientAdminFail);
  }

  User.findOneAndUpdate({
    username: request.body.profile.username
  }, request.body.profile)
    .lean().exec((error, doc) => {
      if (error) return response.json(error);
      return response.json(httpResponses.onProfileUpdateSuccess);
    });
}

module.exports = {
  fetch: fetch,
  update: update
};