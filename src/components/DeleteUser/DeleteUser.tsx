import { Button } from 'antd';
import { useAppDispatch } from '../../helpers/hooks/redux';
import { setReload } from '../../store/slices/usersSlice';
import { deleteUser } from '../../store/thunks/usersThunk';

const DeleteUser = ({ id }: { id: number }) => {
  const dispatch = useAppDispatch();
  const handleDeleteUser = () => {
    dispatch(deleteUser(id));
    dispatch(setReload());
  };

  return (
    <Button onClick={handleDeleteUser} style={{ marginLeft: '5px' }}>
      Delete
    </Button>
  );
};

export default DeleteUser;
