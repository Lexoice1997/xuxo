import { ClockCircleOutlined } from '@ant-design/icons';
import styles from './Confirmation.module.scss';

function Confirmation() {
  return (
    <div className={styles.confirmation}>
      <ClockCircleOutlined style={{ fontSize: '70px', color: '#1890FF' }} />
      <h2>Потверждение аккаунта</h2>
      <p>Пожалуйста обратитесь к менеджеру для одобрения регистрации вашего аккаунта</p>
    </div>
  );
}

export default Confirmation;
