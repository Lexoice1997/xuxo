import { Col, Row, Skeleton } from 'antd';
import { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { CONFIRMATION_PAGE, LOGIN_PAGE } from '../../helpers/constants/constants';
import { useAppDispatch, useAppSelector } from '../../helpers/hooks/redux';
import { fetchServices } from '../../store/thunks/servicesThunk';
import styles from './Main.module.scss';

function Main() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { user, isUserLogin } = useAppSelector((state) => state.authReducer);
  const { services, isLoading } = useAppSelector((state) => state.servicesReducer);

  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate(`${LOGIN_PAGE}`);
    } else {
      if (!user?.isActive) {
        navigate(`${CONFIRMATION_PAGE}`);
      }
    }
  }, [navigate, user?.isActive]);

  return (
    <>
      <h2>Виды услуг</h2>
      {isLoading ? (
        <Skeleton />
      ) : (
        <Row>
          {services?.map((item) => (
            <Col span={24} key={item.id}>
              <NavLink to={`/service/${item.id}`}>
                <div className={styles.card}>{item.title}</div>
              </NavLink>
            </Col>
          ))}
        </Row>
      )}
    </>
  );
}

export default Main;
