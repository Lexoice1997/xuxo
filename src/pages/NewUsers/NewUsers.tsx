import { Pagination, Table } from 'antd';
import { ColumnsType } from 'antd/lib/table/interface';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../helpers/hooks/redux';
import { splitNum } from '../../helpers/utils/splitNum';
import { setNewUsersPage } from '../../store/slices/usersSlice';
import { IUsersData } from '../../types/IUsers';
import { fetchAllUsers, fetchUsers } from './../../store/thunks/usersThunk';
import ActivateContent from './ActivateContent';

const NewUsers = () => {
  const dispatch = useAppDispatch();
  const { users, count, newUsersPage, reload, isLoading } = useAppSelector(
    (state) => state.usersReducer
  );

  const handlePageChange = (page: number) => {
    dispatch(setNewUsersPage(page));
  };

  const usersColumns: ColumnsType<IUsersData> = [
    {
      title: 'Имя',
      dataIndex: 'first_name',
      key: 'first_name',
    },
    {
      title: 'Фамилия',
      dataIndex: 'last_name',
      key: 'last_name',
    },
    {
      title: 'Телефон',
      dataIndex: 'phone_number',
      key: 'phone_number',
    },
    {
      title: 'Номер паспорта',
      dataIndex: 'passport_number',
      key: 'password_number',
    },
    {
      title: 'ПИНФЛ',
      dataIndex: 'pinfl',
      key: 'pinfl',
    },
    {
      title: 'Баланс',
      dataIndex: 'balance',
      key: 'balance',
      render: (_, record) => <div>{splitNum(record.balance)}</div>,
    },
    {
      title: 'Статус',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Актив',
      dataIndex: 'isActive',
      key: 'isActive',
    },
    {
      title: 'Действия',
      dataIndex: '',
      key: 'x',
      width: '15%',
      render: (_, record) => (
        <div key={record.id}>
          <ActivateContent id={record.id} active={1} />
        </div>
      ),
    },
  ];

  useEffect(() => {
    dispatch(fetchUsers({ take: 10, page: newUsersPage, IsActive: 0 }));
  }, [reload, dispatch, newUsersPage]);

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  return (
    <>
      <Table
        dataSource={users}
        columns={usersColumns}
        style={{ marginTop: 20 }}
        pagination={false}
        loading={isLoading ? true : false}
        rowKey={(record) => record.id as React.Key}
      />
      <Pagination
        total={count}
        defaultCurrent={newUsersPage}
        onChange={handlePageChange}
        pageSize={10}
        style={{ marginTop: '10px', display: 'flex', justifyContent: 'flex-end' }}
        className="pagination"
      />
    </>
  );
};

export default NewUsers;
