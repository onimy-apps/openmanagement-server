const User = require('../models/User');

function isAdmin(id, role) {
  return new Promise((resolve, reject) => {
    checkClientSentControl(role)
      .then(() => {
        User.findOne({ _id: id }, (error, doc) => {
          if (error) return reject(false);
          const role = doc.role.toLowerCase();
          if (role === 'admin' || role === 'manager') {
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
    if (role.toLowerCase() === 'admin' || role.toLowerCase() === 'manager') {
      return resolve(true);
    }
    return reject(false);
  });
}

module.exports = {
  isAdmin: isAdmin
};