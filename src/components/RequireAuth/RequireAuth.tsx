import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { CONFIRMATION_PAGE, LOGIN_PAGE } from '../../helpers/constants/constants';
import { useAppSelector } from '../../helpers/hooks/redux';

const RequireAuth = ({ allowedRoles }: { allowedRoles: string[] }) => {
  const location = useLocation();
  const { user } = useAppSelector((state) => state.authReducer);

  return allowedRoles.includes(user?.role as string) && user?.isActive ? (
    <Outlet />
  ) : user ? (
    <Navigate to={`${CONFIRMATION_PAGE}`} state={{ from: location }} replace />
  ) : (
    <Navigate to={`${LOGIN_PAGE}`} state={{ from: location }} replace />
  );
};

export default RequireAuth;
