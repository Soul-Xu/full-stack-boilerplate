import React, { useEffect } from 'react'
import { NextPage } from 'next'
import PageLayout from '../../layout/PageLayout'
import styles from "./index.module.scss";
import classnames from "classnames/bind";
const classNames = classnames.bind(styles);

/** components */
import BasicInformation from '../../funcComponents/basicInformation/index';
import HandleInformation from '../../funcComponents/handleInformation/index';
import ReasonAnalysis from '../../funcComponents/reasonAnalysis/index';
import RecoveryProcess from '../../funcComponents/recoveryProcess/index';
import EffectAnalysis from '../../funcComponents/effectAnalysis/index';
import AttachmentUpload from '../../funcComponents/attachmentUpload/index';
import SubmitElement from '../../funcComponents/submitElement/index';

interface SecondLevelAuditProps {
}

const SecondLevelAudit: NextPage = () => {

  return(
    // @ts-ignore
    <PageLayout>
      <section className={classNames("container")}>
        <h1 className={classNames("container-title")}>事件管理</h1>
        <div className={classNames("container-content")}>
          <BasicInformation />
          <HandleInformation />
          <ReasonAnalysis />
          <RecoveryProcess />
          <EffectAnalysis />
          <AttachmentUpload />
          <SubmitElement />
        </div>
      </section>
    </PageLayout>
  )
}

export default SecondLevelAudit