import { LogoutOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import BackBtn from '../../components/BackBtn/BackBtn';
import UpdateUser from '../../components/UpdateUser/UpdateUser';
import { useAppDispatch, useAppSelector } from '../../helpers/hooks/redux';
import { authSlice } from '../../store/slices/authSlice';
import styles from './Accaunt.module.scss';

function Accaunt() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { logout } = authSlice.actions;
  const { user } = useAppSelector((state) => state.authReducer);

  return (
    <div className={styles.accaunt}>
      <BackBtn />
      <h1>Страница Аккаунта</h1>
      <ul>
        <li>
          <span className={styles.info}>Имя:</span>
          <span>{user?.first_name}</span>
        </li>
        <li>
          <span className={styles.info}>Фамилия:</span>
          <span>{user?.last_name}</span>
        </li>
        <li>
          <span className={styles.info}>Номер телефона:</span>
          <span>{user?.phone_number}</span>
        </li>
        <li>
          <span className={styles.info}>Номер паспорта:</span>
          <span>{user?.passport_number}</span>
        </li>
        <li>
          <span className={styles.info}>ПИНФЛ:</span>
          <span>{user?.pinfl}</span>
        </li>
        <li>
          <span className={styles.info}>Карта номера:</span>
          <span>{user?.card_number}</span>
        </li>
        <li>
          <span className={styles.info}>Срок карты:</span>
          <span>{user?.expiration_date}</span>
        </li>
        <li>
          <span className={styles.info}>Баланс:</span>
          <span>{user?.balance}</span>
        </li>
        <li>
          <span className={styles.info}>Статус:</span>
          <span>{user?.status}</span>
        </li>
        <div className={styles.actions}>
          <UpdateUser />
          <li
            className={styles.logout}
            onClick={() => {
              dispatch(logout());
              navigate('/login');
            }}
          >
            <LogoutOutlined style={{ marginRight: '20px' }} /> <span>Выход</span>
          </li>
        </div>
      </ul>
    </div>
  );
}

export default Accaunt;
