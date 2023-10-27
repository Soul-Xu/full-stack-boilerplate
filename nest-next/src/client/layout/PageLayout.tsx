import Image from "next/image"
import React, { useState } from 'react';
import { useRouter } from 'next/router'
import { Layout, theme, Breadcrumb } from 'antd';
import MenuLayout from './MenuLayout';
import styles from "./index.module.scss"
import classnames from "classnames/bind";
const classNames = classnames.bind(styles);

/** image */
import ImgFormLogo from 'public/images/common/form_logo.png';
const { Header, Content, Footer, Sider } = Layout;

// @ts-ignore
const PageLayout: React.FC = ({children}) => {
  const router = useRouter()
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <div>
      <Layout style={{ minHeight: '100vh' }}>
      <Sider className={classNames("sider-content")} collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        {/* <div className="demo-logo-vertical">
          <Image src={ImgFormLogo} alt="安信证劵" width={150} height={103} />
        </div> */}
        <MenuLayout />
      </Sider>
      <Layout>
        {/* <Header style={{ padding: 0, background: colorBgContainer }} /> */}
        <Content style={{ margin: '0 16px', marginTop: '16px' }}>
          {/* <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb> */}
          { children }
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
      </Layout>
    </Layout>
    </div>
  );
};

export default PageLayout;