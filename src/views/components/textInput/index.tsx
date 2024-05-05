import { InputPropsWithFormik } from './type';
import { TextInput, TextInputProps } from '@mantine/core';
import LabelInput from '../label';
// import './input.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
const CustomInput = (props: InputPropsWithFormik<TextInputProps>) => {
  const { formik, name, label, placeholder, disabled, required, type } = props;
  return (
    <div>
      <LabelInput label={label as string} required={required} />

      <TextInput
        placeholder={placeholder ?? (label as string) ?? undefined}
        type={type ?? 'text'}
        disabled={disabled}
        // readOnly={true}
        variant='filled'
        name={name}
        onChange={formik.handleChange}
        value={formik.values[name]}
        onBlur={formik.handleBlur}
        withErrorStyles={false}
        error={formik.errors[name] ? (formik.errors[name] as string) : false}
        leftSection={type && ['email', 'password'].includes(type) && <FontAwesomeIcon icon={type === 'password' ? faLock : faUser} />}
      />
    </div>
  );
};

export default CustomInput;
