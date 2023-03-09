import { ClockCircleOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../helpers/hooks/redux';
import { authSlice } from '../../store/slices/authSlice';
import styles from './Confirmation.module.scss';

function Confirmation() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { user } = useAppSelector((state) => state.authReducer);
  const { handleActivate } = authSlice.actions;

  useEffect(() => {
    if (user?.isActive === 1) {
      navigate('/');
    }
  }, [navigate, user?.isActive]);

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
