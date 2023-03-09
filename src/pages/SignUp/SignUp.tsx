import { Button, Form, Input, message } from 'antd';
import { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { LOGIN_PAGE } from '../../helpers/constants/constants';
import { useAppDispatch, useAppSelector } from '../../helpers/hooks/redux';
import { authSlice } from '../../store/slices/authSlice';
import { IRegistrationProps, postRegistration } from '../../store/thunks/authThunk';
import styles from './SignUp.module.scss';

function SignUp() {
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { pendingError, isLoading } = useAppSelector((state) => state.authReducer);
  const { handlePendingError } = authSlice.actions;

  const onFinish = async (values: IRegistrationProps) => {
    await dispatch(postRegistration(values));
  };

  useEffect(() => {
    if (pendingError === 'success') {
      navigate(`${LOGIN_PAGE}`);
    } else if (pendingError === 'error') {
      message.error('Неверные данные');
    }

    return () => {
      dispatch(handlePendingError('wait'));
    };
  }, [pendingError, navigate, dispatch, handlePendingError]);

  return (
    <div className={styles.signUp}>
      <h1>XUXO</h1>
      <Form
        form={form}
        name="horizontal_login"
        layout="vertical"
        onFinish={onFinish}
        size="large"
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
        className={styles.signUp}
      >
        <Form.Item
          name="first_name"
          label="Имя"
          rules={[{ required: true, message: 'Пожалуйста напишите своё имя!' }]}
        >
          <Input style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item
          name="last_name"
          label="Фамилия"
          rules={[{ required: true, message: 'Пожалуйста напишите свою фамилию!' }]}
        >
          <Input style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item
          name="phone_number"
          label="Телефон номер"
          rules={[
            { required: true, message: 'Пожалуйста напишите свой номер!' },
            { whitespace: true },
            { min: 12, message: 'Номер должен быть не меньше 12 символов' },
            { max: 12, message: 'Номер должен быть не больше 12 символов' },
          ]}
        >
          <Input style={{ width: '100%' }} type="number" />
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
        {/* <Form.Item
          name="address"
          label="Адрес прописки"
          rules={[{ required: true, message: 'Пожалуйста укажите свой адрес!' }]}
        >
          <Input style={{ width: '100%' }} />
        </Form.Item> */}
        <Form.Item
          name="pinfl"
          label="ПИНФЛ"
          rules={[
            { required: true, message: 'Пожалуйста напишите своё ПИНФЛ!' },
            { min: 14, message: 'ПИНФЛ должен быть не меньше 14 символов' },
            { max: 14, message: 'ПИНФЛ должен быть не больше 14 символов' },
          ]}
        >
          <Input style={{ width: '100%' }} type="number" />
        </Form.Item>
        <Form.Item
          name="passport_number"
          label="Номер паспорта"
          rules={[
            { required: true, message: 'Пожалуйста напишите свой номер паспорта!' },
            { min: 9, message: 'Номер паспорта должен быть не меньше 9 символов' },
            { max: 9, message: 'Номер паспорта должен быть не больше 9 символов' },
          ]}
        >
          <Input style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item shouldUpdate>
          <Button type="primary" htmlType="submit" style={{ width: '100%' }} loading={isLoading}>
            Регистрация
          </Button>
        </Form.Item>
        <Form.Item>
          <NavLink to={`${LOGIN_PAGE}`}>Логин</NavLink>
        </Form.Item>
      </Form>
    </div>
  );
}

export default SignUp;
