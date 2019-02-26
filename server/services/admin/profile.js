const User = require('../../models/User');

function fetch(request, response) {
  User.findOne({ _id: request.query.id }).lean().exec((error, user) => {
    if (error) return response.json(error);
    delete user.password;
    return response.json(user);
  });
}

function update(request, response) {
  if (request.body.access.role !== 'Admin') {
    return response.json({ success: false, message: 'Only admin can update their profile' });
  }

  User.findOneAndUpdate({ username: request.body.profile.username }, request.body.profile)
    .lean().exec((error, doc) => {
      if (error) return response.json(error);
      return response.json({ success: true, message: 'Your profile updated successfully.' });
    });
}

module.exports = {
  fetch: fetch,
  update: update
};