import { useNavigate } from 'react-router-dom';
import { logout } from '../../../redux/features/auth/authSlice';
import { useAppDispatch } from '../../../redux/hook';
import appLogo from '../../../assets/rapptr_logo.jpg';
import { memo } from 'react';
import ThemSwitcher from './components/ThemSwitcher';

const NavBar = memo(() => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handelLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <nav className='bg-white dark:bg-gray-700 w-full flex items-center justify-around py-4 gap-5 '>
      <div className='flex items-center justify-center gap-4'>
        <img src={appLogo} className='h-8 rounded-full' alt='Rappter Lab Logo' />
        <span className='hidden md:block self-center text-xl font-semibold whitespace-nowrap dark:text-white'>Rapptr Labs</span>
      </div>
      <ThemSwitcher />
      <button className='text-white bg-[#6C63FF]  hover:bg-blue-800 font-medium rounded-lg text-md px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 ' onClick={handelLogout}>
        {' '}
        logout
      </button>
    </nav>
  );
});

export default NavBar;
