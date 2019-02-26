const User = require('../../models/User');

function fetch(request, response) {
  User.findOne({ _id: request.query.id }).lean().exec((error, user) => {
    if (error) return response.json(error);
    delete user.password;
    return response.json(user);
  });
}

module.exports = {
  fetch: fetch
};