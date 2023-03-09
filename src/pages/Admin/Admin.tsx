import { AndroidOutlined, LineChartOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu } from 'antd';
import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import {
  NEW_USERS_PAGE,
  PAYMENTS_PAGE,
  SERVICES_PAGE,
  USERS_PAGE,
} from '../../helpers/constants/constants';

const { Header, Content, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuProps['items'] = [
  getItem(<NavLink to={`${NEW_USERS_PAGE}`}>New Users</NavLink>, '1', <UserOutlined />),
  getItem(<NavLink to={`${USERS_PAGE}`}>Users</NavLink>, '2', <UserOutlined />),
  getItem(<NavLink to={`${PAYMENTS_PAGE}`}>Payments</NavLink>, '3', <LineChartOutlined />),
  getItem(<NavLink to={`${SERVICES_PAGE}`}>Services</NavLink>, '4', <AndroidOutlined />),
];

const Admin: React.FC = () => {
  const location = useLocation();
  const pathArray = location.pathname.split('/');

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header className="header">
        <div className="logo">Xuxo</div>
      </Header>
      <Layout>
        <Sider width={200}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
            items={items}
          />
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            {pathArray.map((item: string) => (
              <Breadcrumb.Item key={item}>{item}</Breadcrumb.Item>
            ))}
          </Breadcrumb>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Admin;
