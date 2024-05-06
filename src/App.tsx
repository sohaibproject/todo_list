import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import PrivateRoute from './@core/routes/PrivateRoute';

const TodoPage = lazy(() => import('./views/pages/todo'));
const LoginPage = lazy(() => import('./views/pages/login'));
const NotFound = lazy(() => import('./views/pages/not-found'));
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
          <Route path='/404' element={<NotFound />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
