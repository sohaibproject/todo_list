import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../../redux/hook';
import { getToken } from '../../../../@core/utils/storage/token';
import { useFormik } from 'formik';
import { loginSchema } from '../../../../@core/validations/login.schema';
import { login } from '../../../../redux/features/auth/authSlice';

const useLogin = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const is_auth = getToken();
  useEffect(() => {
    if (is_auth) navigate('/todos');
  }, [is_auth]);
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      const response = await dispatch(login(values));
      if (response.type === 'auth/login/fulfilled') {
        navigate('/todos');
      }
    },
  });
  const loginButtonOpacity = (!formik.values.email || !formik.values.password || Object.keys(formik.errors).length > 0) && `opacity-50`;

  return { formik, loginButtonOpacity };
};

export default useLogin;
