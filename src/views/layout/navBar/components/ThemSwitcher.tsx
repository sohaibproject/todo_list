import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
const ThemSwitcher = () => {
  const [theme, setTheme] = useState('light');
  useEffect(() => {
    switch (theme) {
      case 'dark':
        document.documentElement.classList.add('dark');
        break;
      case 'light':
        document.documentElement.classList.remove('dark');

        break;
      default:
        document.documentElement.classList.remove('dark');

        break;
    }
  }, [theme]);
  return (
    <div className='inline-block space-x-4 p-2 rounded-lg'>
      <FontAwesomeIcon icon={faSun} className={` cursor-pointer text-black dark:text-white ${theme === 'light' && 'text-yellow-500'} `} onClick={() => setTheme('light')} />
      <FontAwesomeIcon icon={faMoon} className={` cursor-pointer text-black  ${theme === 'dark' && 'text-yellow-500'} `} onClick={() => setTheme('dark')} />
    </div>
  );
};

export default ThemSwitcher;
