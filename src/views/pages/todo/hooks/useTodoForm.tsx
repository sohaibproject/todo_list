import { useFormik } from 'formik';
import { todoSchema } from '../../../../@core/validations/todo.schema';
const useTodoForm = (props: TodoFormProps) => {
  const formik = useFormik({
    initialValues: {
      task: 'task' in props ? props.task : '',
    },
    validationSchema: todoSchema,
    onSubmit: async (values) => {
      if ('task' in props) props.handleEdit(values.task);
      else props.handleAdd(values.task);

      props.handleShow((prev) => !prev);
    },
  });
  return { formik };
};

export default useTodoForm;
