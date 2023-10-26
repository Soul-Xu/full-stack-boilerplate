import Head from 'next/head'
import React, { useState } from 'react';
import { useRouter } from 'next/router'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme, Breadcrumb } from 'antd';
import type { MenuProps } from 'antd';

const { Header, Sider, Content } = Layout;

const pathMap = {
  '1': "home",
  '2': "event",
  '3': "center"
}

// @ts-ignore
const PageLayout: React.FC = ({children}) => {
  const router = useRouter()
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  // 切换菜单路由
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    router.push(pathMap[e?.key])
  };

  return (
    <div>
      <Layout>
      <Sider theme="light" trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          onClick={onClick}
          theme="light"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              // @ts-ignore
              icon: <UserOutlined />,
              label: '首页',
            },
            {
              key: '2',
              // @ts-ignore
              icon: <VideoCameraOutlined />,
              label: '事件场景',
            },
            {
              key: '3',
              // @ts-ignore
              icon: <UploadOutlined />,
              label: '应急中心',
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ display: "flex", alignItems: "baseline", padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            // @ts-ignore
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
          <Breadcrumb 
            style={{ marginBottom: '16px' }}
            items={[
              {
                title: 'Home',
              },
              {
                title: <a href="">Application Center</a>,
              },
              {
                title: <a href="">Application List</a>,
              },
              {
                title: 'An Application',
              },
            ]}
          />
        </Header>
        <div style={{ 
            // margin: '24px 16px',
            padding: 24,}}>
          <Content
            style={{
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
          { children }
          </Content>
        </div>
      </Layout>
      </Layout>
    </div>
  );
};

export default PageLayout;