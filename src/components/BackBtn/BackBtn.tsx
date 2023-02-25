import { ArrowLeftOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

function BackBtn() {
  const navigate = useNavigate();
  return (
    <div>
      <ArrowLeftOutlined
        onClick={() => navigate('/')}
        style={{ fontSize: '25px', color: 'rgb(202, 202, 202)', textAlign: 'left' }}
      />
    </div>
  );
}

export default BackBtn;
