import { ClockCircleOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../helpers/hooks/redux';
import { authSlice } from '../../store/slices/AuthSlice';
import styles from './Confirmation.module.scss';

function Confirmation() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { user, token, isUserLogin, isLoading, error } = useAppSelector(
    (state) => state.authReducer
  );
  const { logout, handleActivate } = authSlice.actions;

  useEffect(() => {
    if (user?.isActivated) {
      navigate('/');
    }
  }, [navigate, user?.isActivated]);

  return (
    <div className={styles.confirmation}>
      <ClockCircleOutlined style={{ fontSize: '70px', color: '#1890FF' }} />
      <h2>Потверждение аккаунта</h2>
      <p>Пожалуйста обратитесь к менеджеру для одобрения регистрации вашего аккаунта</p>
      <Button onClick={() => dispatch(handleActivate())}>Activate</Button>
    </div>
  );
}

export default Confirmation;
