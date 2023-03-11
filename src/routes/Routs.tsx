import { withErrorBoundary } from 'react-error-boundary';
import { Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import RequireAuth from '../components/RequireAuth/RequireAuth';
import {
  ACCAUNT_PAGE,
  ADMIN_PAGE,
  CONCLUSION_PAGE,
  CONFIRMATION_PAGE,
  LOGIN_PAGE,
  MAIN_PAGE,
  NEW_USERS_PAGE,
  PAYMENTS_PAGE,
  REFERRAL_PAGE,
  SERVICES_PAGE,
  SERVICE_DETAIL_PAGE,
  SIGNUP_PAGE,
  USERS_PAGE,
} from '../helpers/constants/constants';
import Accaunt from '../pages/Accaunt/Accaunt';
import Admin from '../pages/Admin/Admin';
import Confirmation from '../pages/Confirmation/Confirmation';
import ErrorPage from '../pages/Error/Error';
import Login from '../pages/Login/Login';
import Main from '../pages/Main/Main';
import Payments from '../pages/Payments/Payments';
import Referral from '../pages/Referral/Referral';
import Services from '../pages/Services/Services';
import SignUp from '../pages/SignUp/SignUp';
import Users from '../pages/Users/Users';
import Conclusion from '../pages/Сonclusion/Conclusion';
import NewUsers from './../pages/NewUsers/NewUsers';
import ServiceDetail from './../pages/ServiceDetail/ServiceDetail';

function Routs() {
  return (
    <Routes>
      <Route path={LOGIN_PAGE} element={<Login />} />
      <Route path={CONFIRMATION_PAGE} element={<Confirmation />} />
      <Route path={SIGNUP_PAGE} element={<SignUp />} />
      <Route element={<RequireAuth allowedRoles={['Admin']} />}>
        <Route path={ADMIN_PAGE} element={<Admin />}>
          <Route path={NEW_USERS_PAGE} element={<NewUsers />} />
          <Route path={USERS_PAGE} element={<Users />} />
          <Route path={SERVICES_PAGE} element={<Services />} />
          <Route path={PAYMENTS_PAGE} element={<Payments />} />
        </Route>
      </Route>

      <Route element={<RequireAuth allowedRoles={['User', 'Admin']} />}>
        <Route path={MAIN_PAGE} element={<Layout />}>
          <Route path={MAIN_PAGE} element={<Main />} />
          <Route path={SERVICE_DETAIL_PAGE} element={<ServiceDetail />} />
          <Route path={CONCLUSION_PAGE} element={<Conclusion />} />
        </Route>
        <Route path={REFERRAL_PAGE} element={<Referral />} />
        <Route path={ACCAUNT_PAGE} element={<Accaunt />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default withErrorBoundary(Routs, { fallback: <ErrorPage /> });
