import { Button, Popover } from 'antd';
import { useState } from 'react';
import { useAppDispatch } from '../../helpers/hooks/redux';
import { setCount } from '../../store/slices/paymentsSlice';
import { patchPayments } from '../../store/thunks/paymentsThunk';

const PaymentContent = ({
  id,
  customerId,
  status,
}: {
  id: number;
  customerId: number;
  status: string;
}) => {
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);

  const hide = () => {
    setOpen(false);
  };

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  const handlePatchPayments = async () => {
    hide();
    await dispatch(patchPayments({ order_id: id, customer: customerId, status: status }));
    dispatch(setCount());
  };

  const paymentContent = () => (
    <Button type="primary" onClick={handlePatchPayments}>
      {status === 'Paid' ? 'Оплата' : 'Отказ'}
    </Button>
  );

  return (
    <Popover
      content={paymentContent}
      title={status === 'Paid' ? 'Оплата' : 'Отказ'}
      trigger="click"
      onOpenChange={handleOpenChange}
      open={open}
    >
      <Button onClick={hide} style={{ marginRight: '5px' }}>
        {status === 'Paid' ? 'Оплата' : 'Отказ'}
      </Button>
    </Popover>
  );
};

export default PaymentContent;
