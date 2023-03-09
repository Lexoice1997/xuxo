import { ClockCircleOutlined } from '@ant-design/icons';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../helpers/hooks/redux';
import styles from './Confirmation.module.scss';

function Confirmation() {
  const navigate = useNavigate();
  const { user } = useAppSelector((state) => state.authReducer);

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
    </div>
  );
}

export default Confirmation;
