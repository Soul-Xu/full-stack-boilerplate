import React, { useEffect } from "react"
import { NextPage } from "next"
import PageLayout from "../../layout/PageLayout"
import { Row, Col, Card, Divider } from "antd"
import styles from "./index.module.scss";
import classnames from "classnames/bind";
const classNames = classnames.bind(styles);

/** components */

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
            <Row>
              <Col span={8} className={classNames("demo")}>
                <Card title="折线图">
                  111
                </Card>
              </Col>
              <Col span={8} className={classNames("demo")}>
                <Card title="柱状图">
                  222
                </Card>
              </Col>
              <Col span={8} className={classNames("demo")}>
                <Card title="饼图">
                  333
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