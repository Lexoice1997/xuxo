import { Pagination, Table } from 'antd';
import { ColumnsType } from 'antd/lib/table/interface';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../helpers/hooks/redux';
import { splitNum } from '../../helpers/utils/splitNum';
import { setUsersPage } from '../../store/slices/usersSlice';
import { IUsersData } from '../../types/IUsers';
import ActivateContent from '../NewUsers/ActivateContent';
import { fetchAllUsers, fetchUsers } from './../../store/thunks/usersThunk';
import ReferalContent from './ReferalContent';

const Users = () => {
  const dispatch = useAppDispatch();
  const { users, count, usersPage, reload, isLoading } = useAppSelector(
    (state) => state.usersReducer
  );

  const handlePageChange = (page: number) => {
    dispatch(setUsersPage(page));
  };

  const usersColumns: ColumnsType<IUsersData> = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
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
      title: 'Рефералы',
      dataIndex: 'referals',
      key: 'referals',
      render: (_, record) => (
        <>
          <div>
            {record.referals[0]?.referal_1 ? (
              <>
                {record.referals[0]?.referal_1.first_name} {record.referals[0].referal_1.last_name}
              </>
            ) : (
              ''
            )}
          </div>
          <div>
            {record.referals[0]?.referal_2 ? (
              <>
                {record.referals[0]?.referal_2.first_name} {record.referals[0].referal_2.last_name}
              </>
            ) : (
              ''
            )}
          </div>
        </>
      ),
    },
    {
      title: 'Действия',
      dataIndex: '',
      key: 'x',
      width: '15%',
      render: (_, record) => (
        <div key={record.id}>
          <ReferalContent id={record.id} />
          <ActivateContent id={record.id} active={0} action="Ban" />
        </div>
      ),
    },
  ];

  useEffect(() => {
    dispatch(fetchUsers({ take: 10, page: usersPage, IsActive: 1 }));
  }, [reload, dispatch, usersPage]);

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
        defaultCurrent={usersPage}
        onChange={handlePageChange}
        pageSize={10}
        style={{ marginTop: '10px', display: 'flex', justifyContent: 'flex-end' }}
        className="pagination"
      />
    </>
  );
};

export default Users;
