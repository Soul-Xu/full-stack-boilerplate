import React, { useEffect } from "react"
import { NextPage } from "next"
import PageLayout from "../../layout/PageLayout"
import { Row, Col, Card, Divider } from "antd"
import styles from "./index.module.scss";
import classnames from "classnames/bind";
const classNames = classnames.bind(styles);

/** components */
import LineDemo from "../../components/chartsDemo/line"
import AreaDemo from "../../components/chartsDemo/area"
import ColumnDemo from "../../components/chartsDemo/column"
import BarDemo from "../../components/chartsDemo/bar"
import PieDemo from "../../components/chartsDemo/pie"
import DualAxesDemo from "../../components/chartsDemo/dualAxes"

import CustomLineDemo from '../../components/chartsDemo/customLine/index';
import CustomPieDemo from '../../components/chartsDemo/customPie/index';
import CustomMixDemo from '../../components/chartsDemo/customMix/index';

interface ChartsProps {
}

const Charts: NextPage = () => {
  return(
    <PageLayout>
      <section className={classNames("container")}>
        <h1 className={classNames("container-title")}>图表示例</h1>
        <div className={classNames("container-content")}>
          <h3>基础图表</h3>
          <Divider />
          <section className={classNames("content-demos")}>
            <Row className={classNames("row-demo")}>
              <Col span={8} className={classNames("col-demo")}>
                <Card title="折线图">
                  <LineDemo />
                </Card>
              </Col>
              <Col span={8} className={classNames("col-demo")}>
                <Card title="面积图">
                  <AreaDemo />
                </Card>
              </Col>
              <Col span={8} className={classNames("col-demo")}>
                <Card title="柱状图">
                  <ColumnDemo />
                </Card>
              </Col>
            </Row>
            <Row className={classNames("row-demo")}>
              <Col span={8} className={classNames("col-demo")}>
                <Card title="条形图">
                  <BarDemo />
                </Card>
              </Col>
              <Col span={8} className={classNames("col-demo")}>
                <Card title="饼图">
                  <PieDemo />
                </Card>
              </Col>
              <Col span={8} className={classNames("col-demo")}>
                <Card title="双折线图">
                  <DualAxesDemo />
                </Card>
              </Col>
            </Row>
          </section>
        </div>
        <Divider />
        <div className={classNames("container-content")}>
          <h3>高级图表</h3>
          <Divider />
          <section className={classNames("content-demos")}>
            <Row className={classNames("row-demo")}>
              <Col span={12} className={classNames("col-demo")}>
                <Card title="自定义图形">
                  <CustomLineDemo />
                </Card>
              </Col>
              <Col span={12} className={classNames("col-demo")}>
                <Card title="自定义环形">
                  <CustomPieDemo />
                </Card>
              </Col>
            </Row>
            <Row className={classNames("row-demo")}>
              <Col span={24}>
                <Card title="图表联动">
                  <CustomMixDemo />
                </Card>
              </Col>
            </Row>
          </section>
        </div>
      </section>
    </PageLayout>
  )
}

export default Charts