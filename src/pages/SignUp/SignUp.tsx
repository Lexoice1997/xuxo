import { Button, DatePicker, Form, Input } from 'antd';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { LOGIN_PAGE } from '../../routes/Routs';
import styles from './SignUp.module.scss';

function SignUp() {
  const [form] = Form.useForm();
  const [, forceUpdate] = useState({});

  useEffect(() => {
    forceUpdate({});
  }, []);

  const onFinish = (values: any) => {
    console.log('Finish:', values);
  };

  console.log('asdasd');

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
        name="name"
        label="Имя"
        rules={[{ required: true, message: 'Пожалуйста напишите своё имя!' }]}
      >
        <Input style={{ width: '100%' }} />
      </Form.Item>
      <Form.Item
        name="surname"
        label="Фамилия"
        rules={[{ required: true, message: 'Пожалуйста напишите свою фамилию!' }]}
      >
        <Input style={{ width: '100%' }} />
      </Form.Item>
      <Form.Item
        name="patronymic"
        label="Отчество"
        rules={[{ required: true, message: 'Пожалуйста напишите своё отчество!' }]}
      >
        <Input style={{ width: '100%' }} />
      </Form.Item>
      <Form.Item
        name="date"
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
        name="PINFL"
        label="ПИНФЛ"
        rules={[
          { required: true, message: 'Пожалуйста напишите своё ПИНФЛ!' },
          { min: 14, message: 'ПИНФЛ должен быть не меньше 14 символов' },
          { max: 14, message: 'ПИНФЛ должен быть не больше 14 символов' },
        ]}
      >
        <Input style={{ width: '100%' }} />
      </Form.Item>
      <Form.Item
        name="phone"
        label="Телефон номер"
        rules={[
          { required: true, message: 'Пожалуйста напишите свой номер!' },
          { whitespace: true },
          { min: 9, message: 'Номер должен быть не меньше 9 символов' },
          { max: 9, message: 'Номер должен быть не больше 9 символов' },
        ]}
      >
        <Input addonBefore="+998" style={{ width: '100%' }} />
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
        {() => (
          <Button
            type="primary"
            htmlType="submit"
            style={{ width: '100%' }}
            disabled={
              !form.isFieldsTouched(true) ||
              !!form.getFieldsError().filter(({ errors }) => errors.length).length
            }
          >
            Вход
          </Button>
        )}
      </Form.Item>
      <Form.Item>
        <NavLink to={`${LOGIN_PAGE}`}>Логин</NavLink>
      </Form.Item>
    </Form>
  );
}

export default SignUp;
