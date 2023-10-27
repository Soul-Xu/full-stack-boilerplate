import React, { useEffect } from 'react'
import { NextPage } from 'next'
import PageLayout from '../../layout/PageLayout'
import styles from "./index.module.scss";
import classnames from "classnames/bind";
const classNames = classnames.bind(styles);

/** components */
import BasicInformation from '../../funcComponents/basicInformation/index';

interface HomeProps {
}

const Home: NextPage = () => {
  return(
    // @ts-ignore
    <PageLayout>
      <section className={classNames("home-container")}>
        <div className={classNames("container-title")}>事件管理</div>
        <div className={classNames("container-content")}>
          <BasicInformation />
        </div>
      </section>
    </PageLayout>
  )
}

export default Home