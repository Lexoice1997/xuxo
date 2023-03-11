import { PhoneOutlined } from '@ant-design/icons';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BackBtn from '../../components/BackBtn/BackBtn';
import { useAppDispatch, useAppSelector } from '../../helpers/hooks/redux';
import { fetchServiceById } from '../../store/thunks/servicesThunk';
import styles from './ServiceDetail.module.scss';

const ServiceDetail = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { service } = useAppSelector((state) => state.servicesReducer);

  useEffect(() => {
    dispatch(fetchServiceById(id));
  }, [dispatch, id]);

  return (
    <>
      <div className={styles.header}>
        <BackBtn />
        <h2>{service?.title}</h2>
      </div>

      <img src={service?.image} alt={service?.title} className={styles.image} />
      <a href="tel:99899-284-44-44">
        <div className={styles.phone}>
          <PhoneOutlined style={{ fontSize: 20 }} />
          <h3>{service?.phone}</h3>
        </div>
      </a>
    </>
  );
};

export default ServiceDetail;
