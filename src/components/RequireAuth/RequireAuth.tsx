import { useEffect } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { CONFIRMATION_PAGE, LOGIN_PAGE } from '../../helpers/constants/constants';
import { useAppDispatch, useAppSelector } from '../../helpers/hooks/redux';
import { checkLogin } from '../../store/thunks/authThunk';

const RequireAuth = ({ allowedRoles }: { allowedRoles: string[] }) => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const { user, isUserLogin } = useAppSelector((state) => state.authReducer);

  useEffect(() => {
    if (isUserLogin === false) {
      dispatch(checkLogin());
    }
  }, [dispatch, isUserLogin]);

  return allowedRoles.includes(user?.role as string) && user?.isActive ? (
    <Outlet />
  ) : user ? (
    <Navigate to={`${CONFIRMATION_PAGE}`} state={{ from: location }} replace />
  ) : (
    <Navigate to={`${LOGIN_PAGE}`} state={{ from: location }} replace />
  );
};

export default RequireAuth;
