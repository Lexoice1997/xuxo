import { Button, DatePicker, Form, Input, message } from 'antd';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../helpers/hooks/redux';
import { LOGIN_PAGE } from '../../routes/Routs';
import { authSlice } from '../../store/slices/AuthSlice';
import { IRegistrationProps, postRegistration } from '../../store/thunks/authThunk';
import styles from './SignUp.module.scss';

function SignUp() {
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { user, isUserLogin, isRegistered, isLoading, error } = useAppSelector(
    (state) => state.authReducer
  );
  console.log(isRegistered);

  useEffect(() => {
    if (isRegistered) {
      navigate(`${LOGIN_PAGE}`);
    }
  }, [isRegistered, navigate]);

  const onFinish = async (values: IRegistrationProps) => {
    await dispatch(postRegistration(values));

    if (isRegistered) {
      navigate(`${LOGIN_PAGE}`);
    } else {
      message.error('Неверные данные');
    }
  };

  return (
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
        name="firstname"
        label="Имя"
        rules={[{ required: true, message: 'Пожалуйста напишите своё имя!' }]}
      >
        <Input style={{ width: '100%' }} />
      </Form.Item>
      <Form.Item
        name="lastname"
        label="Фамилия"
        rules={[{ required: true, message: 'Пожалуйста напишите свою фамилию!' }]}
      >
        <Input style={{ width: '100%' }} />
      </Form.Item>
      <Form.Item name="patronymic" label="Отчество">
        <Input style={{ width: '100%' }} />
      </Form.Item>
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
      <Form.Item
        name="birthday"
        label="Дата рождения"
        rules={[{ required: true, message: 'Пожалуйста укажите свой день рождения!' }]}
        style={{ width: '100%' }}
      >
        <DatePicker />
      </Form.Item>
      <Form.Item
        name="address"
        label="Адрес прописки"
        rules={[{ required: true, message: 'Пожалуйста укажите свой адрес!' }]}
      >
        <Input style={{ width: '100%' }} />
      </Form.Item>
      <Form.Item
        name="pinfl"
        label="ПИНФЛ"
        rules={[
          { required: true, message: 'Пожалуйста напишите своё ПИНФЛ!' },
          { min: 14, message: 'ПИНФЛ должен быть не меньше 14 символов' },
          { max: 14, message: 'ПИНФЛ должен быть не больше 14 символов' },
        ]}
      >
        <Input style={{ width: '100%' }} />
      </Form.Item>
      <Form.Item name="refCode" label="Реферальный код">
        <Input style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item shouldUpdate>
        <Button type="primary" htmlType="submit" style={{ width: '100%' }} loading={isLoading}>
          Вход
        </Button>
      </Form.Item>
      <Form.Item>
        <NavLink to={`${LOGIN_PAGE}`}>Логин</NavLink>
      </Form.Item>
    </Form>
  );
}

export default SignUp;
