import * as yup from 'yup';

export const todoSchema = yup.object().shape({
  task: yup.string().required('Required').min(1, 'Task must be at least 1 characters').max(25, 'Task must be less than 25 characters'),
});
