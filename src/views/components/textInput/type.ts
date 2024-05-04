import { FormikProps } from 'formik';

export type InputPropsWithFormik<T> = {
  formik: FormikProps<any>;
  name: string;
} & T;
