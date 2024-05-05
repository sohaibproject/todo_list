import { memo } from 'react';

import CustomInput from '../../../components/textInput';
import useTodoForm from '../hooks/useTodoForm';

const TodoForm: React.FC<TodoFormProps> = memo((props) => {
  const { formik } = useTodoForm(props);
  return (
    <form className='flex gap-2 justify-center  items-center mb-3 bg-white p-2 rounded-md' onSubmit={formik.handleSubmit}>
      <CustomInput formik={formik} name='task' type='text' />

      <button type='submit' className=' bg-[#6C63FF] text-white rounded-md px-4 py-1'>
        {' '}
        Save
      </button>
    </form>
  );
});

export default TodoForm;
