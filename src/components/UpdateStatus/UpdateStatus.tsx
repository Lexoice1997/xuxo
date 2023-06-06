import { Button, Popover, Select } from 'antd';
import { useState } from 'react';
import { useAppDispatch } from '../../helpers/hooks/redux';
import { setReload } from '../../store/slices/usersSlice';
import { updateStatus } from '../../store/thunks/usersThunk';

const statusArray = [
  // { value: 'agent', label: 'agent' },
  // { value: 'motivator', label: 'motivator' },
  // { value: 'manager', label: 'manager' },
  { value: 'lider_manager', label: 'lider_manager 3млн сум' },
  { value: 'lider', label: 'lider 7млн сум' },
  { value: 'direktor', label: 'direktor 20млн сум' },
];

const UpdateStatus = ({ id }: { id: number }) => {
  const dispatch = useAppDispatch();
  const [status, setStatus] = useState<string>('');
  const [balance, setBalance] = useState<number>(0);
  const [open, setOpen] = useState(false);

  const hide = () => {
    setOpen(false);
  };

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  const onChange = (value: string) => {
    setStatus(value);
    if (value === 'lider_manager') {
      setBalance(3000000);
    } else if (value === 'lider') {
      setBalance(7000000);
    } else {
      setBalance(20000000);
    }
  };
  const handleAddReferal = async () => {
    hide();
    await dispatch(updateStatus({ customerId: id, status: status, balance: balance }));
    dispatch(setReload());
  };

  const referalContent = () => (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Select
        showSearch
        placeholder="Выберите статус"
        optionFilterProp="children"
        onChange={onChange}
        filterOption={(input, option) =>
          (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
        }
        options={statusArray}
        style={{ width: '250px' }}
      />
      <Button style={{ marginTop: '10px' }} type="primary" onClick={handleAddReferal}>
        Отправить
      </Button>
    </div>
  );

  return (
    <Popover
      content={referalContent}
      title="Status"
      trigger="click"
      onOpenChange={handleOpenChange}
      open={open}
    >
      <Button onClick={hide}>Status</Button>
    </Popover>
  );
};

export default UpdateStatus;
