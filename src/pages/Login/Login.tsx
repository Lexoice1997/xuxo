import { Button, Form, Input, message } from 'antd';
import { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../helpers/hooks/redux';
import { MAIN_PAGE, SIGNUP_PAGE } from '../../routes/Routs';
import { authSlice } from '../../store/slices/AuthSlice';
import { ILoginProps, postLogin } from '../../store/thunks/authThunk';
import styles from './Login.module.scss';

function Login() {
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { user, isUserLogin, pendingError, isLoading } = useAppSelector(
    (state) => state.authReducer
  );
  const { handlePendingError } = authSlice.actions;

  const onFinish = (values: ILoginProps) => {
    dispatch(postLogin({ phone: values.phone, password: values.password }));
  };

  useEffect(() => {
    if (isUserLogin) {
      navigate(`${MAIN_PAGE}`);
    }

    return () => {
      dispatch(handlePendingError('wait'));
    };
  }, [dispatch, handlePendingError, isUserLogin, navigate, user]);

  useEffect(() => {
    if (pendingError === 'error') {
      message.error('Неверные пароль или логин');
    }
  }, [pendingError]);

  return (
    <div className={styles.login}>
      <h1>XUXO</h1>
      <Form
        form={form}
        name="horizontal_login"
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={() => message.error('Неверные пароль или логин')}
        size="large"
        className={styles.loginForm}
        labelCol={{
          xs: { span: 12, offset: 0 },
          sm: { span: 16, offset: 4 },
          md: { span: 12, offset: 6 },
          lg: { span: 8, offset: 8 },
          xl: { span: 8, offset: 8 },
          xxl: { span: 8, offset: 8 },
        }}
        wrapperCol={{
          xs: { span: 12, offset: 0 },
          sm: { span: 16, offset: 4 },
          md: { span: 12, offset: 6 },
          lg: { span: 8, offset: 8 },
          xl: { span: 8, offset: 8 },
          xxl: { span: 8, offset: 8 },
        }}
      >
        <Form.Item
          name="phone"
          label="Телефон номер"
          rules={[
            { required: true, message: 'Пожалуйста напишите свой номер!' },
            { whitespace: true },
            { min: 12, message: 'Номер должен быть не меньше 12 символов' },
            { max: 12, message: 'Номер должен быть не больше 12 символов' },
          ]}
        >
          <Input style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            { required: true, message: 'Пожалуйста напишите свой пароль!' },
            { whitespace: true },
            { min: 8, message: 'Номер должен быть не меньше 8 символов' },
          ]}
          label="Пароль"
        >
          <Input.Password />
        </Form.Item>
        <Form.Item shouldUpdate>
          <Button type="primary" htmlType="submit" style={{ width: '100%' }} loading={isLoading}>
            Вход
          </Button>
        </Form.Item>
        <Form.Item>
          <NavLink to={`${SIGNUP_PAGE}`}>Регистрация</NavLink>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Login;
