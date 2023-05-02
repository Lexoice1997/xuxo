import { ClockCircleOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../helpers/hooks/redux';
import { checkLogin } from '../../store/thunks/authThunk';
import styles from './Confirmation.module.scss';

function Confirmation() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.authReducer);

  useEffect(() => {
    if (user?.isActive === '1') {
      navigate('/');
    }
  }, [navigate, user?.isActive]);

  useEffect(() => {
    dispatch(checkLogin());
  }, [dispatch]);

  return (
    <div className={styles.confirmation}>
      <ClockCircleOutlined style={{ fontSize: '70px', color: '#1890FF' }} />
      <h2>Потверждение аккаунта</h2>
      <p>Пожалуйста обратитесь к менеджеру для одобрения регистрации вашего аккаунта</p>
      <Button onClick={() => navigate('/login')}>Логин</Button>
    </div>
  );
}

export default Confirmation;
