import React, { useState } from 'react'
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Button, Menu } from 'antd'
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons'

type MenuItem = Required<MenuProps>['items'][number]

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem
}

const items: MenuItem[] = [
  getItem('home', '1', <></>),
  getItem('Option 2', '2', <></>),
  getItem('Option 3', '3', <></>),

  getItem('Navigation One', 'sub1', <></>, [
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
    getItem('Option 7', '7'),
    getItem('Option 8', '8'),
  ]),

  getItem('Navigation Two', 'sub2', <></>, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),

    getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
  ]),
]

interface SideLayoutProps {
  style: any
}

const SideLayout: React.FC = (props: SideLayoutProps) => {
  const [collapsed, setCollapsed] = useState(false)

  const toggleCollapsed = () => {
    setCollapsed(!collapsed)
  }

  return (
    <section style={{ width: 200 }}>
      {/* <div className="logo" /> */}
      <Menu
        mode="inline"
        defaultSelectedKeys={['4']}
        items={items}
      />
    </section>
  )
}

export default SideLayout