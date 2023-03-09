import { Button, Popover, Select } from 'antd';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../helpers/hooks/redux';
import { setReload } from '../../store/slices/usersSlice';
import { addReferalUser } from '../../store/thunks/usersThunk';

const ReferalContent = ({ id }: { id: number }) => {
  const dispatch = useAppDispatch();
  const { allUsers } = useAppSelector((state) => state.usersReducer);
  const [referalId, setReferalId] = useState<number>(0);
  const [open, setOpen] = useState(false);

  const hide = () => {
    setOpen(false);
  };

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  const onChange = (value: string) => {
    setReferalId(+value);
  };
  const handleAddReferal = async () => {
    hide();
    await dispatch(addReferalUser({ customerId: id, referal: referalId }));
    dispatch(setReload());
  };

  const referalContent = () => (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Select
        showSearch
        placeholder="Выберите реферала"
        optionFilterProp="children"
        onChange={onChange}
        filterOption={(input, option) =>
          (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
        }
        options={allUsers}
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
      title="Реферал"
      trigger="click"
      onOpenChange={handleOpenChange}
      open={open}
    >
      <Button onClick={hide}>Referal</Button>
    </Popover>
  );
};

export default ReferalContent;
