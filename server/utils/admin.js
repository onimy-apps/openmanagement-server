const User = require('../models/User');

function isAdmin(id, role) {
  return new Promise((resolve, reject) => {
    checkClientSentControl(role)
      .then(() => {
        User.findOne({ _id: id }, (error, doc) => {
          if (error) return reject(false);
          if (doc.role.toLowerCase() === 'admin') {
            return resolve(true);
          }
        });
      })
      .catch(error => {
        return reject(false);
      });
  });
}

function checkClientSentControl(role) {
  return new Promise((resolve, reject) => {
    if (role.toLowerCase() !== 'admin') {
      return reject(false);
    }
    return resolve(true);
  });
}

module.exports = {
  isAdmin: isAdmin
};