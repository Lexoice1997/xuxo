import { Button, Form, Input, message, Modal, Typography } from 'antd';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../helpers/hooks/redux';
import { setBalance } from '../../store/slices/authSlice';
import { setCount } from '../../store/slices/paymentsSlice';
import { createAmoute } from '../../store/thunks/paymentsThunk';
import { updateUser } from './../../store/thunks/usersThunk';

const CashOrder = () => {
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.authReducer);
  const [messageApi] = message.useMessage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinishAmouteWithCard = async (values: {
    amoute: number;
    card_number: string;
    expiration_date: string;
  }) => {
    await dispatch(
      updateUser({
        first_name: user?.first_name as string,
        last_name: user?.last_name as string,
        card_number: values.card_number,
        expiration_date: values.expiration_date,
      })
    );
    await dispatch(createAmoute({ amoute: values.amoute }))
      .unwrap()
      .then(() => handleCancel())
      .catch((rejectedValueOrSerializedError) => {
        messageApi.error(rejectedValueOrSerializedError.message[0]);
      });

    dispatch(setCount());
    dispatch(setBalance(values.amoute));
  };

  const onFinishAmoute = async (values: { amoute: number }) => {
    await dispatch(createAmoute({ amoute: values.amoute }))
      .unwrap()
      .then(() => handleCancel())
      .catch((rejectedValueOrSerializedError) => {
        messageApi.error(rejectedValueOrSerializedError.message[0]);
      });
    dispatch(setCount());
    dispatch(setBalance(values.amoute));
  };
  return (
    <>
      <Button type="primary" onClick={showModal} style={{ margin: '20px 0' }}>
        Вывод денег
      </Button>
      <Modal title="Вывод денег" open={isModalOpen} onCancel={handleCancel} okText={false}>
        {user?.card_number ? (
          <Form
            form={form}
            name="horizontal_login"
            layout="vertical"
            onFinish={onFinishAmoute}
            size="large"
          >
            <Form.Item
              name="amoute"
              label="Сумма для вывода"
              rules={[{ required: true, message: 'Пожалуйста напишите сумму для вывода!' }]}
            >
              <Input style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item shouldUpdate>
              <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                Вывод
              </Button>
            </Form.Item>
            <Typography.Text type="danger">Дарамат салыгы 12% услап калынады</Typography.Text>
          </Form>
        ) : (
          <Form
            form={form}
            name="horizontal_login"
            layout="vertical"
            onFinish={onFinishAmouteWithCard}
            size="large"
          >
            <Form.Item
              name="card_number"
              label="Номер карты"
              rules={[{ required: true, message: 'Пожалуйста напишите номер карты!' }]}
            >
              <Input style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item
              name="expiration_date"
              label="Срок карты"
              rules={[{ required: true, message: 'Пожалуйста напишите срок карты!' }]}
            >
              <Input style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item
              name="amoute"
              label="Сумма для вывода"
              rules={[{ required: true, message: 'Пожалуйста напишите сумму для вывода!' }]}
            >
              <Input style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item shouldUpdate>
              <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                Вывод
              </Button>
            </Form.Item>
            <Typography.Text type="danger">Дарамат салыгы 12% услап калынады</Typography.Text>
          </Form>
        )}
      </Modal>
    </>
  );
};

export default CashOrder;
