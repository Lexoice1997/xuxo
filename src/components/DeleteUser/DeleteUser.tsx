import { Button } from 'antd';
import { useAppDispatch } from '../../helpers/hooks/redux';
import { setReload } from '../../store/slices/usersSlice';
import { deleteUser } from '../../store/thunks/usersThunk';

const DeleteUser = ({ id }: { id: number }) => {
  const dispatch = useAppDispatch();
  const handleDeleteUser = async () => {
    await dispatch(deleteUser(id));
    dispatch(setReload());
  };

  return (
    <Button onClick={handleDeleteUser} style={{ marginRight: '10px' }}>
      Delete
    </Button>
  );
};

export default DeleteUser;
