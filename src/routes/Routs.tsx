import { Route, Routes } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Main from '../pages/Main/Main';

export const LOGIN_PAGE = '/login';
export const MAIN_PAGE = '/';

function Routs() {
  return (
    <Routes>
      <Route path={MAIN_PAGE} element={<Main />} />
      <Route path={LOGIN_PAGE} element={<Login />} />
    </Routes>
  );
}

export default Routs;
