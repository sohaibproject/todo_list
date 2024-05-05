import loginImage from '../../../assets/loginImage.svg';
import appLogo from '../../../assets/rapptr_logo.jpg';

import LoadingSpin from '../../components/loading/LoadingSpin';
import CustomInput from '../../components/textInput';
import useLogin from './hooks/useLogin';

const LoginPage = () => {
  const { formik, loginButtonOpacity } = useLogin();
  return (
    <div className='bg-[#6C63FF]  min-h-screen  flex justify-center items-center'>
      <div className='bg-[#F7F7F7] rounded-2xl flex max-w-4xl p-5 items-center gap-3'>
        <div className='md:w-1/2 px-2'>
          <div className='flex  items-center gap-5'>
            <img className='rounded-2xl w-[50px] h-[50px] md:w-[80px] md:h-[80px]' src={appLogo} alt='login form image' />
            <h4 className='text-[#252525] text-xl font-bold '> Rapptr Labs</h4>
          </div>

          <p className=' mt-4 text-[#252525] text-sm md:text-xl font-bold'>Sign into your account</p>

          <form className='flex flex-col gap-4 mt-3' onSubmit={formik.handleSubmit}>
            <CustomInput formik={formik} name='email' placeholder=' user@rapptrlabs.com' type='email' label='Email' required />
            <CustomInput formik={formik} name='password' placeholder='Must be at least 4 characters' type='password' label='Password' required />

            <button
              disabled={formik.isSubmitting}
              className={`bg-[#6C63FF]  ${loginButtonOpacity}   text-white py-2 rounded-xl hover:scale-105 duration-300 hover:bg-[#206ab1] font-medium`}
              type='submit'>
              {formik.isSubmitting ? <LoadingSpin text='sending' /> : 'Login'}
            </button>
          </form>
        </div>
        {/* second col */}
        <div className='md:block hidden w-1/2'>
          <img className='h-[500px]' src={loginImage} alt='login form image' />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
