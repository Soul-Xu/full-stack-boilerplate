import React, { useState, useEffect } from 'react';
import {
  HomeOutlined,
  ApartmentOutlined,
  ForkOutlined,
  HistoryOutlined,
  PartitionOutlined,
  ScheduleOutlined,
  TableOutlined,
  SolutionOutlined,
  TransactionOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import type { MenuProps, MenuTheme } from 'antd/es/menu';
import { useRouter } from 'next/router';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  // @ts-ignore
  getItem('事件管理', '0', <HomeOutlined />),
  // @ts-ignore
  getItem('接收和分配', '1', <ApartmentOutlined />),
  // @ts-ignore
  getItem('诊断和恢复', '2', <ForkOutlined />),
  // @ts-ignore
  getItem('回顾', '3', <HistoryOutlined />),
  // @ts-ignore
  getItem('二级部审核', '4', <PartitionOutlined />),
  // @ts-ignore
  getItem('事件报告审核', '5', <ScheduleOutlined />),
  // @ts-ignore
  getItem('部门会签', '6', <TableOutlined />),
  // @ts-ignore
  getItem('报告协调', '7', <SolutionOutlined />),
  // @ts-ignore
  getItem('关闭/结单', '8', <TransactionOutlined />),
];

const itemsMap = {
  "0": "home",
  "1": "receiveAssign",
  "2": "diagnosisRecovery",
  "3": "review",
  "4": "secondLevelAudit",
  "5": "eventReportAudit",
  "6": "departmentCounterSign",
  "7": "reportCoordination",
  "8": "statement"
}

const pathsMap = {
  "home": "0",
  "receiveAssign": "1",
  "diagnosisRecovery": "2",
  "review": "3",
  "secondLevelAudit": "4",
  "departmentCounterSign": "5",
  "eventReportAudit": "6",
  "reportCoordination": "7",
  "statement": "8"
}

const MenuLayout: React.FC = () => {
  const [selectKey, setSelectKey] = useState([''])
  const router = useRouter()

  useEffect(() => {
    const currentPath = router.pathname.slice(1)
    setSelectKey([`${pathsMap[currentPath]}`])
  }, [])

  const onClick = (menu: any) => {
    setSelectKey([`${menu.key}`])
    router.push(`/${itemsMap[menu.key]}`)
  }

  return (
    <>
      <Menu
        onClick={onClick}
        selectedKeys={selectKey}
        mode={"vertical"}
        theme={"dark"}
        items={items}
      />
    </>
  );
};

export default MenuLayout;
