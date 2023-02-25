import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../../helpers/hooks/redux';

const RequireAuth = ({ allowedRoles }: { allowedRoles: string[] }) => {
  const location = useLocation();
  const { user, pendingError } = useAppSelector((state) => state.authReducer);

  return user?.roles.find((role: string) => allowedRoles?.includes(role)) ? (
    <Outlet />
  ) : user ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
