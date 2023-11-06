import React, { useEffect } from 'react'
import { NextPage } from 'next'

import styles from "./index.module.scss";
import classnames from "classnames/bind";
const classNames = classnames.bind(styles);
import debounce from 'lodash/debounce';

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
  taskId: "", // 事件编号
  registrant: "", // 登记人
  registrationTime: "", // 登记时间
  discoveryChannels: "", // 发现渠道
  reportedBy: "", // 报告人
  discoverer: "", // 发现者
  mainFollowUpTeam: "", // 主要跟进团队
  availabilityFollowUpEr: "", // 可用性跟进人 
  assistFollowUpTeam: "", // 协助跟进团队
}

const DiagnosisRecovery: NextPage = () => {
  const dispatchRedux = useDispatch();
  const [data, dispatch] = useImmerReducer(reducer, initialState);
  const { 
    taskId, registrant, registrationTime, discoveryChannels, reportedBy,
    mainFollowUpTeam, availabilityFollowUpEr, assistFollowUpTeam,
  } = data as any;
  const setState = (type: string, val: Record<string, any>) => {
    dispatch({ type, payload: val });
  };

  const onHandleChange = debounce((key: string, value: string) => {
    setState("update", { [key]: value})
  }, 1000)

  const basicForm = {
    name: 'diagnosis-basic-form',
    inRow: true,
    layout: "horizontal",
    labelAlign: "left",
    items: [
      {
        type: 'input',
        subtype: "text",
        key: 'taskId',
        value: taskId,
        label: (
          <span className={classNames("form-item-label-option")}>事件编号</span>
        ),
        name: 'taskId',
        disabled: true,
        placeholder: '自动获取',
        onChange: (e: any) => {
          onHandleChange("taskId", e.target.value.trim())
        }
      },
      {
        type: 'input',
        subtype: "text",
        key: 'registrant',
        value: registrant,
        label: (
          <span className={classNames("form-item-label-option")}>登记人</span>
        ),
        name: 'registrant',
        disabled: true,
        placeholder: '自动获取',
        onChange: (e: any) => {
          onHandleChange("registrant", e.target.value.trim())
        }
      },
      {
        type: 'input',
        subtype: "text",
        key: 'registrationTime',
        value: registrationTime,
        label: (
          <span className={classNames("form-item-label-option")}>登记时间</span>
        ),
        name: 'registrationTime',
        disabled: true,
        placeholder: '自动获取',
        onChange: (e: any) => {
          onHandleChange("registrationTime", e.target.value.trim())
        }
      },
      {
        type: 'select',
        key: 'discoveryChannels',
        value: discoveryChannels,
        label: (
          <span className={classNames("form-item-label")}>发现渠道</span>
        ),
        name: 'discoveryChannels',
        disabled: true,
        require: 1,
        placeholder: '请输入发现渠道',
        onChange: (value: any) => {
          onHandleChange("discoveryChannels", value)
        }
      },
      {
        type: 'select',
        key: 'reportedBy',
        value: reportedBy,
        label: (
          <span className={classNames("form-item-label-option")}>报告人</span>
        ),
        name: 'reportedBy',
        disabled: true,
        placeholder: '请输入报告人',
        onChange: (value: any) => {
          onHandleChange("reportedBy", value)
        }
      }
    ],
  }

  const recoveryForm3 = {
    name: 'diagnosis-recovery-three',
    inRow: true,
    layout: "horizontal",
    labelAlign: "left",
    items: [
      {
        type: 'select',
        key: 'mainFollowUpTeam',
        value: mainFollowUpTeam,
        label: (
          <span className={classNames("form-item-label-option")}>主要跟进团队</span>
        ),
        name: 'mainFollowUpTeam',
        onChange: (value: any) => {
          onHandleChange("mainFollowUpTeam", value)
        }
      },
      {
        type: 'select',
        key: 'availabilityFollowUpEr',
        value: availabilityFollowUpEr,
        label: (
          <span className={classNames("form-item-label-option")}>可用性跟进人</span>
        ),
        name: 'availabilityFollowUpEr',
        onChange: (value: any) => {
          onHandleChange("availabilityFollowUpEr", value)
        }
      },
      {
        type: 'select',
        key: 'assistFollowUpTeam',
        value: assistFollowUpTeam,
        label: (
          <span className={classNames("form-item-label")}>协助跟进团队</span>
        ),
        name: 'assistFollowUpTeam',
        onChange: (value: any) => {
          onHandleChange("assistFollowUpTeam", value)
        }
      },
    ],
  }

  return(
    // @ts-ignore
    <PageLayout>
      <section className={classNames("container")}>
        <h1 className={classNames("container-title")}>事件管理</h1>
        <div className={classNames("container-content")}>
          <BasicInformation basicFormDetail={basicForm} />
          <HandleInformation />
          <ReasonAnalysis />
          <RecoveryProcess form4={recoveryForm3} showForm5={false} />
          <AttachmentUpload />
        </div>
      </section>
    </PageLayout>
  )
}

export default DiagnosisRecovery