import dayjs from 'dayjs';
import { useEffect } from 'react';
import CashOrder from '../../components/CashOrder/CashOrder';
import { useAppDispatch, useAppSelector } from '../../helpers/hooks/redux';
import { fetchPaymentsByUser } from '../../store/thunks/paymentsThunk';
import styles from './Conclusion.module.scss';

const Conclusion = () => {
  const dispatch = useAppDispatch();
  const { paymentOneUser, reload } = useAppSelector((state) => state.paymentsReducer);

  useEffect(() => {
    dispatch(fetchPaymentsByUser());
  }, [dispatch, reload]);

  return (
    <div>
      <CashOrder />
      <p className={styles.paragraph}>Дарамат салыгы 12% услап калынады</p>
      {paymentOneUser?.map((item) => (
        <div key={item.id} className={styles.checks}>
          <div>{dayjs(item.created_at).format('YYYY MM DD')}</div>
          <div>{item.status}</div>
          <div>{item.amoute} сум.</div>
        </div>
      ))}
    </div>
  );
};

export default Conclusion;
