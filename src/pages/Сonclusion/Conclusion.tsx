import dayjs from 'dayjs';
import { useEffect } from 'react';
import CashOrder from '../../components/CashOrder/CashOrder';
import { useAppDispatch, useAppSelector } from '../../helpers/hooks/redux';
import { fetchPaymentsByUser } from '../../store/thunks/paymentsThunk';
import styles from './Conclusion.module.scss';

const Conclusion = () => {
  const dispatch = useAppDispatch();
  const { paymentOneUser } = useAppSelector((state) => state.paymentsReducer);

  useEffect(() => {
    dispatch(fetchPaymentsByUser());
  }, [dispatch]);

  return (
    <div>
      <CashOrder />
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
