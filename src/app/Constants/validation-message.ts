export const signInValidation = {
  email: [
    { type: 'required', message: 'Email is required' },
    { type: 'pattern', message: 'Enter a valid email' },
  ],
  password: [
    { type: 'required', message: 'Password is required' },
    {
      type: 'minlength',
      message: 'Password must be at least 3 characters long',
    },
    { type: 'pattern', message: 'Please enter minimum 8 character password with atleast 1 upper case, 1 lower case & 1 special character.' },
  ],
};
