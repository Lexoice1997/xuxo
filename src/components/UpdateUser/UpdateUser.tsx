import { Button, Form, Input, message, Modal } from 'antd';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../helpers/hooks/redux';
import { setUpdateUser } from '../../store/slices/authSlice';
import { IUpdateUser } from '../../types/IUsers';
import { updateUser } from './../../store/thunks/usersThunk';

const UpdateUser = () => {
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();
  const { user } = useAppSelector((state) => state.authReducer);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = (values: IUpdateUser) => {
    handleCancel();
    dispatch(
      updateUser({
        first_name: values.first_name,
        last_name: values.last_name,
        card_number: values.card_number,
        expiration_date: values.expiration_date,
      })
    );
    dispatch(
      setUpdateUser({
        first_name: values.first_name,
        last_name: values.last_name,
        card_number: values.card_number,
        expiration_date: values.expiration_date,
      })
    );
  };

  useEffect(() => {
    form.setFieldsValue({
      first_name: user?.first_name,
      last_name: user?.last_name,
      card_number: user?.card_number,
      expiration_date: user?.expiration_date,
    });
  }, []);

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Обновить данные
      </Button>
      <Modal title="Изменить данные" open={isModalOpen} onCancel={handleCancel} okText={false}>
        <Form
          form={form}
          name="horizontal_login"
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={() => message.error('Неверные пароль или логин')}
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
            name="first_name"
            label="Имя"
            rules={[{ message: 'Пожалуйста напишите своё имя!' }]}
          >
            <Input style={{ width: '100%' }} size="large" />
          </Form.Item>
          <Form.Item
            name="last_name"
            label="Фамилия"
            rules={[{ message: 'Пожалуйста напишите своё фамилию!' }]}
          >
            <Input style={{ width: '100%' }} size="large" />
          </Form.Item>

          <Form.Item
            name="card_number"
            label="Номер карты"
            rules={[{ message: 'Пожалуйста напишите номер карты!' }]}
          >
            <Input style={{ width: '100%' }} size="large" />
          </Form.Item>
          <Form.Item
            name="expiration_date"
            label="Срок карты"
            rules={[{ message: 'Пожалуйста напишите срок карты!' }]}
          >
            <Input style={{ width: '100%' }} size="large" />
          </Form.Item>
          <Form.Item shouldUpdate>
            <Button type="primary" htmlType="submit" style={{ width: '100%' }} loading={false}>
              Обнавить
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default UpdateUser;
