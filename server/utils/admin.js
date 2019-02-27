const User = require('../models/User');

function isAdmin(id) {
  return new Promise((resolve, reject) => {
    User.findOne({ _id: id }, (error, doc) => {
      console.log(doc);
      console.log(error)
      if (error) return reject(false);
      if (doc.role.toLowerCase() === 'admin') {
        console.log('TRUE')
        return resolve(true);
      }
    });
  });
}

module.exports = {
  isAdmin: isAdmin
};