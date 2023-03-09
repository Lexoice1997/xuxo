import { Button, Popover } from 'antd';
import { useState } from 'react';
import { useAppDispatch } from '../../helpers/hooks/redux';
import { setCount } from '../../store/slices/servicesSlice';
import { deleteService } from '../../store/thunks/servicesThunk';

const DeleteContent = ({ id }: { id: number }) => {
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);

  const hide = () => {
    setOpen(false);
  };

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  const handleDeleteService = async () => {
    await dispatch(deleteService(id));
    dispatch(setCount());
    hide();
  };

  const activateContent = () => <Button onClick={handleDeleteService}>Удалить</Button>;

  return (
    <Popover
      content={activateContent}
      title="Удалить"
      trigger="click"
      onOpenChange={handleOpenChange}
      open={open}
    >
      <Button onClick={hide}>Delete</Button>
    </Popover>
  );
};

export default DeleteContent;
