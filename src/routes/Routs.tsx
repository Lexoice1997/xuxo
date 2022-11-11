import { Route, Routes } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Main from '../pages/Main/Main';
import Confirmation from '../pages/Confirmation/Confirmation';
import SignUp from '../pages/SignUp/SignUp';
import Referral from '../pages/Referral/Referral';

export const MAIN_PAGE = '/';
export const LOGIN_PAGE = '/login';
export const CONFIRMATION_PAGE = '/confirmation';
export const SIGNUP_PAGE = '/signup';
export const REFERRAL_PAGE = '/referral';

function Routs() {
  return (
    <Routes>
      <Route path={MAIN_PAGE} element={<Main />} />
      <Route path={LOGIN_PAGE} element={<Login />} />
      <Route path={CONFIRMATION_PAGE} element={<Confirmation />} />
      <Route path={SIGNUP_PAGE} element={<SignUp />} />
      <Route path={REFERRAL_PAGE} element={<Referral />} />
    </Routes>
  );
}

export default Routs;
