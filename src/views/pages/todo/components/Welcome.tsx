import { memo } from 'react';
import { useAppSelector } from '../../../../redux/hook';

const Welcome = memo(() => {
  const { user } = useAppSelector((state) => state.auth);
  return (
    <div className=' text-center py-3 '>
      {' '}
      <span className='text-lg font-bold  text-[#6C63FF] '>🎉 Welcome</span> <span className='text-black capitalize text-lg dark:text-white  '>{user?.user_username}</span>{' '}
      <h2 className='text-2xl font-bold text-black dark:text-white'>My To-Do List </h2>
    </div>
  );
});

export default Welcome;
