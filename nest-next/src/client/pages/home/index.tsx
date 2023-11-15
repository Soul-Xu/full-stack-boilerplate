import React, { useEffect } from 'react'
import { NextPage } from 'next'
import { Tabs, Row, Col, Card } from 'antd'
import PageLayout from '../../layout/PageLayout'
import styles from "./index.module.scss";
import classnames from "classnames/bind";
const classNames = classnames.bind(styles);
import { useDispatch, useSelector } from "react-redux";
const { TabPane } = Tabs;

/** components */
import ProcessIframe from "../../funcComponents/processIframe"

interface HomeProps {
}

const frontendURL = "https://yunsucoding.landray.com.cn/web"
const processId = "1hbcove6fw3mwqa6w268kv4hofm0l21b88w2"

const Home: NextPage = () => {
  return(
    // @ts-ignore
    <PageLayout>
      <section className={classNames("container")}>
        <div className={classNames("content")}>
          {/* @ts-ignore */}
          <Tabs defaultActiveKey="auditForm">
            {/* @ts-ignore */}
            <TabPane tab="流程操作" key="auditForm">
              {/* @ts-ignore */}
              <ProcessIframe type="auditForm" processId={processId} />
            </TabPane>
          {/* @ts-ignore */}
          <TabPane tab="流程审批意见" key="auditNotes">
            {/* @ts-ignore */}
            <ProcessIframe type="auditNotes" processId={processId} />
          </TabPane>
          {/* @ts-ignore */}
          <TabPane tab="流程状态" key="processStatus">
            {/* @ts-ignore */}
            <ProcessIframe type="processStatus" processId={processId} />
          </TabPane>
          {/* @ts-ignore */}
          <TabPane tab="流程图" key="auditChart">
            {/* @ts-ignore */}
            <ProcessIframe type="auditChart" processId={processId} />
          </TabPane>
          {/* @ts-ignore */}
          <TabPane tab="流程操作日志" key="auditLogs">
            {/* @ts-ignore */}
            <ProcessIframe type="auditLogs" processId={processId} />
          </TabPane>
          {/* <TabPane tab="流程基本信息" key="basicInfo">
            <ProcessIframe type="basicInfo" processId={processId} />
          </TabPane>
          <TabPane tab="传阅记录" key="auditcirculated">
            <ProcessIframe type="auditcirculated" processId={processId} />
          </TabPane>
          <TabPane tab="流程预估" key="tableEstimated">
            <ProcessIframe type="tableEstimated" processId={processId} />
          </TabPane> */}
        </Tabs>
        </div>
      </section>
    </PageLayout>
  )
}

export default Home