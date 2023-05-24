import { Button } from 'antd';
import { useAppDispatch } from '../../helpers/hooks/redux';
import { setReload } from '../../store/slices/usersSlice';

interface DeleteUserProps {
  id: number;
  referalId: number[];
}
function DeleteReferal({ id, referalId }: DeleteUserProps) {
  const dispatch = useAppDispatch();
  const handleDeleteUser = async () => {
    await fetch('https://api.xuxo.uz/v1/api/admin/referal', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({ customer: id, referal: referalId }),
    });

    dispatch(setReload());
  };
  return (
    <Button onClick={handleDeleteUser} style={{ marginLeft: '5px' }} type="link">
      Delete
    </Button>
  );
}

export default DeleteReferal;
