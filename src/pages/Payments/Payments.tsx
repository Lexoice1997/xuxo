import { Pagination, Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../helpers/hooks/redux';
import { splitNum } from '../../helpers/utils/splitNum';
import { setPage } from '../../store/slices/paymentsSlice';
import { fetchPayments } from '../../store/thunks/paymentsThunk';
import { IPaymentsData } from '../../types/IPayments';
import PaymentContent from './PaymentsContent';

const Payments = () => {
  const dispatch = useAppDispatch();
  const { payments, count, page, reload, isLoading } = useAppSelector(
    (state) => state.paymentsReducer
  );

  const handlePageChange = (page: number) => {
    dispatch(setPage(page));
  };

  const paymentsColumns: ColumnsType<IPaymentsData> = [
    {
      title: 'Имя',
      dataIndex: 'first_name',
      key: 'first_name',
      render: (_, record) => <div>{record.customer.first_name}</div>,
    },
    {
      title: 'Фамилия',
      dataIndex: 'last_name',
      key: 'last_name',
      render: (_, record) => <div>{record.customer.last_name}</div>,
    },
    {
      title: 'Телефон',
      dataIndex: 'phone_number',
      key: 'phone_number',
      render: (_, record) => <div>{record.customer.phone_number}</div>,
    },
    {
      title: 'Номер карты',
      dataIndex: 'card_number',
      key: 'card_number',
      render: (_, record) => <div>{record.customer.card_number}</div>,
    },
    {
      title: 'Дата карты',
      dataIndex: 'expiration_date',
      key: 'expiration_date',
      render: (_, record) => <div>{record.customer.expiration_date}</div>,
    },
    {
      title: 'Баланс',
      dataIndex: 'balance',
      key: 'balance',
      render: (_, record) => <div>{splitNum(record.customer.balance)}</div>,
    },
    {
      title: 'Статус',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Запрос',
      dataIndex: 'amoute',
      key: 'amoute',
    },
    {
      title: 'Действия',
      dataIndex: '',
      key: 'x',
      width: '15%',
      render: (_, record) => (
        <div key={record.id} style={{ display: 'flex' }}>
          <PaymentContent id={record.id} customerId={record.customerId} status="Paid" />
          <PaymentContent id={record.id} customerId={record.customerId} status="Canceled" />
        </div>
      ),
    },
  ];

  useEffect(() => {
    dispatch(fetchPayments({ take: 10, page: page }));
  }, [dispatch, reload, page]);

  return (
    <>
      <Table
        dataSource={payments}
        columns={paymentsColumns}
        style={{ marginTop: 20 }}
        pagination={false}
        loading={isLoading ? true : false}
        rowKey={(record) => record.id as React.Key}
      />
      <Pagination
        total={count}
        defaultCurrent={page}
        onChange={handlePageChange}
        pageSize={10}
        style={{ marginTop: '10px', display: 'flex', justifyContent: 'flex-end' }}
        className="pagination"
      />
    </>
  );
};

export default Payments;
