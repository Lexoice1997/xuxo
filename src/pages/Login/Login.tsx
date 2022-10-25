import { Button, Form, Input } from 'antd';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { SIGNUP_PAGE } from '../../routes/Routs';
import styles from './Login.module.scss';

function Login() {
  const [form] = Form.useForm();
  const [, forceUpdate] = useState({});

  useEffect(() => {
    forceUpdate({});
  }, []);

  const onFinish = (values: any) => {
    console.log('Finish:', values);
  };

  return (
    <div className={styles.login}>
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
      >
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
          <NavLink to={`${SIGNUP_PAGE}`}>Регистрация</NavLink>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Login;
