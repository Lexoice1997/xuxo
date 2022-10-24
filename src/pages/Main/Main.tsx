import {
  AppleOutlined,
  ClearOutlined,
  CloudOutlined,
  FireOutlined,
  GroupOutlined,
  HeartOutlined,
  RocketOutlined,
  ToolOutlined,
} from '@ant-design/icons';
import { Button, Col, Row, Statistic } from 'antd';
import styles from './Main.module.scss';

function Main() {
  return (
    <div>
      <div className={styles.header}>
        <Row className={styles.header}>
          <Col span={24}>
            <Statistic
              title="Account Balance (SUM)"
              value={112893}
              precision={2}
              valueStyle={{ color: 'white' }}
              style={{ color: 'white' }}
            />
            <Col className={styles.buttons}>
              <Button style={{ marginTop: 16 }} type="primary">
                Рефералы
              </Button>
              <Button style={{ marginTop: 16 }} type="primary">
                Recharge
              </Button>
            </Col>
          </Col>
        </Row>
      </div>
      <div className={styles.body}>
        <h2>Виды услуг</h2>
        <Row>
          <Col span={24}>
            <div className={styles.card}>
              <FireOutlined style={{ fontSize: '24px', marginRight: '10px' }} />
              Электр/Газ үскенелерин оңлаў
            </div>
          </Col>
          <Col span={24}>
            <div className={styles.card}>
              <ToolOutlined style={{ fontSize: '24px', marginRight: '10px' }} />
              Сантехника хызмети
            </div>
          </Col>
          <Col span={24}>
            <div className={styles.card}>
              <GroupOutlined style={{ fontSize: '24px', marginRight: '10px' }} />
              Кепсерлеў (сварка) (навес, дәрўаза, решётка)
            </div>
          </Col>
          <Col span={24}>
            <div className={styles.card}>
              <RocketOutlined style={{ fontSize: '24px', marginRight: '10px' }} />
              Котёл оңлаў
            </div>
          </Col>
          <Col span={24}>
            <div className={styles.card}>
              <AppleOutlined style={{ fontSize: '24px', marginRight: '10px' }} />
              Бағбаншылық (атыз жумыслары)
            </div>
          </Col>
          <Col span={24}>
            <div className={styles.card}>
              <HeartOutlined style={{ fontSize: '24px', marginRight: '10px' }} />
              Диагностика (РОФЕС)
            </div>
          </Col>
          <Col span={24}>
            <div className={styles.card}>
              <ClearOutlined style={{ fontSize: '24px', marginRight: '10px' }} />
              Гөне мебеллерди жаңартыў
            </div>
          </Col>
          <Col span={24}>
            <div className={styles.card}>
              <CloudOutlined style={{ fontSize: '24px', marginRight: '10px' }} />
              Көрпе төсек сырыў
            </div>
          </Col>
          <Col span={24}>
            <div className={styles.card}>
              <HeartOutlined style={{ fontSize: '24px', marginRight: '10px' }} />
              Массаж (ересек ҳәм кишкене балаларға)
            </div>
          </Col>
          <Col span={24}>
            <div className={styles.card}>
              <FireOutlined style={{ fontSize: '24px', marginRight: '10px' }} />
              Аспаз (той мерекелерге)
            </div>
          </Col>
          <Col span={24}>
            <div className={styles.card}>
              <FireOutlined style={{ fontSize: '24px', marginRight: '10px' }} />
              Салон хызмети
            </div>
          </Col>
          <Col span={24}>
            <div className={styles.card}>
              <HeartOutlined style={{ fontSize: '24px', marginRight: '10px' }} />
              Физиотерапия (NUGA BEST ҳ.т.б)
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Main;
