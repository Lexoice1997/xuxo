import { Button, Popover } from 'antd';
import { useState } from 'react';
import { useAppDispatch } from '../../helpers/hooks/redux';
import { setReload } from '../../store/slices/usersSlice';
import { activateUser } from '../../store/thunks/usersThunk';

const ActivateContent = ({
  id,
  active,
  action,
}: {
  id: number;
  active: number;
  action: string;
}) => {
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);

  const hide = () => {
    setOpen(false);
  };

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  const handleActivateUser = async () => {
    hide();
    await dispatch(activateUser({ active: active, id: id }));
    dispatch(setReload());
  };

  const activateContent = () => <Button onClick={handleActivateUser}>{action}</Button>;

  return (
    <Popover
      content={activateContent}
      title={action}
      trigger="click"
      onOpenChange={handleOpenChange}
      open={open}
    >
      <Button onClick={hide} style={{ marginLeft: '10px' }}>
        {action}
      </Button>
    </Popover>
  );
};

export default ActivateContent;
