import { Button, Popover, Select } from 'antd';
import { useState } from 'react';
import { useAppDispatch } from '../../helpers/hooks/redux';
import { setReload } from '../../store/slices/usersSlice';
import { updateStatus } from '../../store/thunks/usersThunk';

const statusArray = [
  { value: 'agent', label: 'agent' },
  { value: 'motivator', label: 'motivator' },
  { value: 'manager', label: 'manager' },
  { value: 'lider_manager', label: 'lider_manager' },
  { value: 'lider', label: 'lider' },
  { value: 'direktor', label: 'direktor' },
];

const UpdateStatus = ({ id }: { id: number }) => {
  const dispatch = useAppDispatch();
  const [status, setStatus] = useState<string>('');
  const [open, setOpen] = useState(false);

  const hide = () => {
    setOpen(false);
  };

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  const onChange = (value: string) => {
    setStatus(value);
  };
  const handleAddReferal = async () => {
    hide();
    await dispatch(updateStatus({ customerId: id, status: status }));
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
