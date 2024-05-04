import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  email: yup.string().email('Invalid email').max(50, 'Email must be less than 50 characters').required('Email is required'),

  password: yup.string().min(4, 'password must be at least 4 characters').required('Password is required').max(16, 'Password must be less than 16 characters'),
});
