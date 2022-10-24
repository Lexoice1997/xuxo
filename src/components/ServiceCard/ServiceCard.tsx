import { FireOutlined } from '@ant-design/icons';
import { Col } from 'antd';

function ServiceCard() {
  return (
    <Col span={24}>
      <div>
        <FireOutlined style={{ fontSize: '24px', marginRight: '10px' }} />
        Электр/Газ үскенелерин оңлаў
      </div>
    </Col>
  );
}

export default ServiceCard;
