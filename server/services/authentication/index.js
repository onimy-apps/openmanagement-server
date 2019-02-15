module.exports = {
  onValidationError: {
    success: false,
    message: 'Please enter username, password and email.'
  },
  onUserSaveError: {
    success: false,
    message: 'That username already exists.'
  },
  onUserSaveSuccess: {
    success: true,
    message: 'Successfully created new user.'
  },
  onUserNotFound: {
    success: false,
    message: 'User not found.'
  },
  onAuthenticationFail: {
    success: false,
    message: 'Passwords did not match.'
  }
};
