import { Button, Form, Input, message, Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import { useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../helpers/hooks/redux';
import { setCount } from '../../store/slices/servicesSlice';
import { createService, fetchServices } from '../../store/thunks/servicesThunk';
import { ICreateService, IService } from './../../types/IServices';
import DeleteContent from './DeleteContent';

const Services = () => {
  const dispatch = useAppDispatch();
  const { services, reload, isLoading } = useAppSelector((state) => state.servicesReducer);
  const [form] = Form.useForm();
  const [image, setImage] = useState<any>();
  const inputFileRef = useRef<any>(null);

  const servicesColumns: ColumnsType<IService> = [
    {
      title: 'Описание',
      dataIndex: 'title',
      key: 'title',
      width: '30%',
      // render: (_, record) => <div>{splitNum(record.sum)}</div>,
    },
    {
      title: 'Телефон',
      dataIndex: 'phone',
      key: 'phone',
      width: '20%',
    },

    {
      title: 'Действия',
      dataIndex: '',
      key: 'x',
      width: '20%',
      render: (_, record) => (
        <div key={record.id}>
          <DeleteContent id={record.id} />
        </div>
      ),
    },
  ];

  const onCreateService = (values: ICreateService) => {
    const formData = new FormData();
    formData.append('image', image);
    formData.append('title', values.title);
    formData.append('phone', values.phone);
    dispatch(createService(formData));
    dispatch(setCount());
  };

  const handleChangeFile = async (event: any) => {
    const file = event.target.files[0];
    setImage(file);
  };

  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch, reload]);

  return (
    <>
      <Form
        form={form}
        name="horizontal_login"
        layout="inline"
        onFinish={onCreateService}
        onFinishFailed={() => message.error('Неверные пароль или логин')}
        size="middle"
      >
        <Button onClick={() => inputFileRef.current.click()} style={{ marginRight: '10px' }}>
          Фото
        </Button>
        <input ref={inputFileRef} type="file" onChange={handleChangeFile} hidden />
        <Form.Item
          name="title"
          label="Описание"
          rules={[{ required: true, message: 'Пожалуйста напишите описание!' }]}
        >
          <Input style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item
          name="phone"
          label="Телефон номер"
          rules={[
            { required: true, message: 'Пожалуйста напишите свой номер!' },
            { whitespace: true },
            { min: 13, message: 'Номер должен быть не меньше 13 символов' },
            { max: 13, message: 'Номер должен быть не больше 13 символов' },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item shouldUpdate>
          <Button type="primary" htmlType="submit" style={{ width: '100%' }} loading={isLoading}>
            Добавить
          </Button>
        </Form.Item>
      </Form>
      <Table
        dataSource={services}
        columns={servicesColumns}
        style={{ marginTop: 20 }}
        pagination={false}
        loading={isLoading ? true : false}
        rowKey={(record) => record.id as React.Key}
      />
    </>
  );
};

export default Services;
