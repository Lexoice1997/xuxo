import { Button, Form, Input, message, Modal } from 'antd';
import { useEffect, useState } from 'react';
import { useAppDispatch } from '../../helpers/hooks/redux';
import { updateUser } from '../../store/thunks/usersThunk';
import { IUpdateUser } from '../../types/IUsers';

const AdminUpdateUser = ({ first_name, last_name, card_number, expiration_date }: IUpdateUser) => {
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();
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
        password: values.password?.length ? values.password : null,
      })
    );
  };

  useEffect(() => {
    form.setFieldsValue({
      first_name,
      last_name,
      card_number,
      expiration_date,
    });
  }, [form]);

  return (
    <>
      <Button onClick={showModal}>Update</Button>
      <Modal title="Изменить данные" open={isModalOpen} onCancel={handleCancel} okText={false}>
        <Form
          form={form}
          name="horizontal_login"
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={() => message.error('Неверные пароль или логин')}
          size="large"
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
          <Form.Item
            name="password"
            label="Пароль"
            rules={[{ message: 'Пожалуйста напишите свой пароль!' }]}
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

export default AdminUpdateUser;
