import { Button, Col, Row, Statistic } from 'antd';
import { useEffect } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import {
  ACCAUNT_PAGE,
  ADMIN_PAGE,
  CONCLUSION_PAGE,
  CONFIRMATION_PAGE,
  LOGIN_PAGE,
  REFERRAL_PAGE,
} from '../../helpers/constants/constants';
import { useAppSelector } from '../../helpers/hooks/redux';
import styles from './Layout.module.scss';

function Main() {
  const navigate = useNavigate();
  const { user } = useAppSelector((state) => state.authReducer);

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
    <div className={styles.main}>
      <div className={styles.header}>
        <Row className={styles.header}>
          <Col span={24}>
            <Statistic
              title="Баланс аккаунта (сум)"
              value={user?.balance}
              precision={2}
              valueStyle={{ color: 'white' }}
              style={{ color: 'white' }}
            />
            <p>
              {user?.first_name} {user?.last_name}
            </p>
            <Col className={styles.buttons}>
              <Button
                size="large"
                style={{
                  marginTop: 16,
                  backgroundColor: '#1890FF',
                  border: 'none',
                  color: 'white',
                }}
                type="primary"
              >
                <NavLink to={`${REFERRAL_PAGE}`}>Рефералы</NavLink>
              </Button>
              <Button
                size="large"
                style={{
                  marginTop: 16,
                  backgroundColor: '#1890FF',
                  border: 'none',
                  color: 'white',
                }}
                type="primary"
              >
                <NavLink to={`${CONCLUSION_PAGE}`}>Вывод</NavLink>
              </Button>
              <Button
                size="large"
                style={{
                  marginTop: 16,
                  backgroundColor: '#1890FF',
                  border: 'none',
                  color: 'white',
                }}
              >
                <NavLink to={`${ACCAUNT_PAGE}`}>Аккаунт</NavLink>
              </Button>
              {user?.role === 'Admin' ? (
                <Button size="large" style={{ marginTop: 16, color: '#327b9d' }} type="primary">
                  <NavLink to={`${ADMIN_PAGE}`}>Админ</NavLink>
                </Button>
              ) : (
                ''
              )}
            </Col>
          </Col>
        </Row>
      </div>
      <div className={styles.body}>
        <Outlet />
      </div>
    </div>
  );
}

export default Main;
