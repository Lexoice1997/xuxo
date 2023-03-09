import { ArrowLeftOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

function BackBtn() {
  const navigate = useNavigate();
  return (
    <ArrowLeftOutlined
      onClick={() => navigate('/')}
      style={{ fontSize: '20px', color: 'rgb(202, 202, 202)', textAlign: 'left' }}
    />
  );
}

export default BackBtn;
