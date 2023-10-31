import React, { useEffect } from 'react'
import { NextPage } from 'next'

import styles from "./index.module.scss";
import classnames from "classnames/bind";
const classNames = classnames.bind(styles);

import { useImmerReducer } from "use-immer";
import { reducer } from "../../utils/reducer";
import { useDispatch, useSelector } from "react-redux";

/** component */
import PageLayout from '../../layout/PageLayout'
import BasicInformation from '../../funcComponents/basicInformation/index';
import HandleInformation from '../../funcComponents/handleInformation/index';
import ReasonAnalysis from '../../funcComponents/reasonAnalysis/index';
import RecoveryProcess from '../../funcComponents/recoveryProcess/index';
import AttachmentUpload from '../../funcComponents/attachmentUpload/index';

interface DiagnosisRecoveryProps {
}

const initialState = {
  mainFollowUpTeam: "", // 主要跟进团队
  availabilityFollowUpEr: "", // 可用性跟进人 
  assistFollowUpTeam: "", // 协助跟进团队
}

const DiagnosisRecovery: NextPage = () => {
  const dispatchRedux = useDispatch();
  const [data, dispatch] = useImmerReducer(reducer, initialState);
  const { 
    mainFollowUpTeam, availabilityFollowUpEr, assistFollowUpTeam,
  } = data as any;
  const setState = (type: string, val: Record<string, any>) => {
    dispatch({ type, payload: val });
  };

  const recoveryForm3 = {
    name: 'recovery-form-three',
    inRow: true,
    layout: "horizontal",
    labelCol: {
      span: 10
    },
    wrapperCol: {
      span: 16
    },
    labelAlign: "right",
    items: [
      {
        type: 'select',
        key: 'mainFollowUpTeam',
        value: mainFollowUpTeam,
        label: '主要跟进团队',
        name: 'mainFollowUpTeam',
        callback: (value: any) => {
          setState("update", { mainFollowUpTeam: value})
        }
      },
      {
        type: 'select',
        key: 'availabilityFollowUpEr',
        value: availabilityFollowUpEr,
        label: '可用性跟进人',
        name: 'availabilityFollowUpEr',
        callback: (value: any) => {
          setState("update", { availabilityFollowUpEr: value})
        }
      },
      {
        type: 'select',
        key: 'assistFollowUpTeam',
        value: assistFollowUpTeam,
        label: '协助跟进团队',
        name: 'assistFollowUpTeam',
        callback: (value: any) => {
          setState("update", { assistFollowUpTeam: value})
        }
      },
    ],
  }

  return(
    // @ts-ignore
    <PageLayout>
      <section className={classNames("container")}>
        <div className={classNames("container-title")}>事件管理</div>
        <div className={classNames("container-content")}>
          <BasicInformation />
          <HandleInformation />
          <ReasonAnalysis />
          <RecoveryProcess form3={recoveryForm3} showForm4={false} />
          <AttachmentUpload />
        </div>
      </section>
    </PageLayout>
  )
}

export default DiagnosisRecovery