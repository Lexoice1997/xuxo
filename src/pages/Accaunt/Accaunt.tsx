import { LogoutOutlined } from '@ant-design/icons';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BackBtn from '../../components/BackBtn/BackBtn';
import { useAppDispatch, useAppSelector } from '../../helpers/hooks/redux';
import { CONFIRMATION_PAGE, LOGIN_PAGE } from '../../routes/Routs';
import { authSlice } from '../../store/slices/AuthSlice';
import styles from './Accaunt.module.scss';

function Accaunt() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { logout } = authSlice.actions;
  const { user, token } = useAppSelector((state) => state.authReducer);

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate(`${LOGIN_PAGE}`);
    } else {
      if (!user?.isActivated) {
        navigate(`${CONFIRMATION_PAGE}`);
      }
    }
  }, [navigate, token, user?.isActivated]);

  return (
    <div className={styles.accaunt}>
      <BackBtn />
      <h1>Страница Аккаунта</h1>
      <ul>
        <li>
          <span className={styles.info}>Имя:</span>
          <span>{user?.firstname}</span>
        </li>
        <li>
          <span className={styles.info}>Фамилия:</span>
          <span>{user?.lastname}</span>
        </li>
        <li>
          <span className={styles.info}>Отчество:</span>
          <span>{user?.patronymic}</span>
        </li>
        <li>
          <span className={styles.info}>День рождения:</span>
          <span>{user?.birthday}</span>
        </li>
        <li>
          <span className={styles.info}>Адрес проживания:</span>
          <span>{user?.address}</span>
        </li>
        <li>
          <span className={styles.info}>Номер телефона:</span>
          <span>{user?.phone}</span>
        </li>

        <li>
          <span className={styles.info}>ПИНФЛ:</span>
          <span>{user?.pinfl}</span>
        </li>
        <li>
          <span className={styles.info}>Баланс:</span>
          <span>{user?.balance}</span>
        </li>
        <li>
          <span className={styles.info}>Реферальный код:</span>
          <span>{user?.id}</span>
        </li>
        <li>
          <span className={styles.info}>Статус:</span>
          <span>{user?.status}</span>
        </li>
        <li
          className={styles.logout}
          onClick={() => {
            dispatch(logout());
            navigate('/');
          }}
        >
          <LogoutOutlined style={{ marginRight: '20px' }} /> <span>Выход</span>
        </li>
      </ul>
    </div>
  );
}

export default Accaunt;
