import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import PrivateRoute from './@core/routes/PrivateRoute';
// import TodoPage from './views/pages/todo';
// import LoginPage from './views/pages/login';
const TodoPage = lazy(() => import('./views/pages/todo'));
const LoginPage = lazy(() => import('./views/pages/login'));
import { ThemeProvider } from './@core/contexts/themContext';
import GlobalLoading from './views/components/loading/GlobalLoading';

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<GlobalLoading />}>
        <Routes>
          <Route path='/' element={<Navigate replace to='/login' />} />
          <Route
            path='/login'
            element={
              <ThemeProvider>
                <LoginPage />
              </ThemeProvider>
            }
          />
          <Route path='/todos' element={<PrivateRoute element={<TodoPage />} />} />
          <Route path='/authorazation' element={<>...authorazation </>} />

          <Route path='/404' element={<>...authorazation </>} />
          <Route path='*' element={<>...authorazation </>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
