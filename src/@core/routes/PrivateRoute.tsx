import { getToken } from '../utils/storage/token';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ redirectPath = '/login', element }: { redirectPath?: string; element: React.ReactNode }) => {
  const is_auth = getToken();
  return is_auth ? element : <Navigate replace to={redirectPath} />;
};

export default PrivateRoute;
