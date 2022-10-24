import { Route, Routes } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Main from '../pages/Main/Main';
import Confirmation from '../pages/Confirmation/Confirmation';

export const MAIN_PAGE = '/';
export const LOGIN_PAGE = '/login';
export const CONFIRMATION_PAGE = '/confirmation';

function Routs() {
  return (
    <Routes>
      <Route path={MAIN_PAGE} element={<Main />} />
      <Route path={LOGIN_PAGE} element={<Login />} />
      <Route path={CONFIRMATION_PAGE} element={<Confirmation />} />
    </Routes>
  );
}

export default Routs;
