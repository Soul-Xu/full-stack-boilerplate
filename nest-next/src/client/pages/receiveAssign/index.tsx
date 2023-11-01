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
import AttachmentUpload from '../../funcComponents/attachmentUpload/index';

interface ReceiveAssignProps {
}

const initialState = {
  title: "", // 标题
  description: "", // 描述
  taskId: "", // 事件编号
  registrant: "", // 登记人
  registrationTime: "", // 登记时间
  discoveryChannels: "", // 发现渠道
  reportedBy: "", // 报告人
  discoveryTime: "", // 发现时间
  status: "", // 状态
  impactSystem: "", // 影响系统
  handleGroup: "", // 处理组
  handler: "", // 处理人
}

const ReceiveAssign: NextPage = () => {
  const dispatchRedux = useDispatch();
  const [data, dispatch] = useImmerReducer(reducer, initialState);
  const { 
    taskId, registrant, registrationTime, discoveryChannels, 
    reportedBy, discoveryTime, status, impactSystem, handleGroup, handler
  } = data as any;
  const setState = (type: string, val: Record<string, any>) => {
    dispatch({ type, payload: val });
  };

  const basicForm = {
    name: 'form2',
    inRow: true,
    layout: "horizontal",
    labelAlign: "left",
    items: [
      {
        type: 'input',
        subType: "text",
        key: 'taskId',
        value: taskId,
        label: (
          <span className={classNames("form-item-label")}>事件编号</span>
        ),
        name: 'taskId',
        require: true,
        disabled: true,
        placeholder: '自动获取',
        callback: (e: any) => {
          setState("update", { taskId: e.target.value.trim()})
        }
      },
      {
        type: 'input',
        subType: "text",
        key: 'registrant',
        value: registrant,
        label: (
          <span className={classNames("form-item-label")}>登记人</span>
        ),
        name: 'registrant',
        require: true,
        placeholder: '自动获取',
        callback: (e: any) => {
          setState("update", { registrant: e.target.value.trim()})
        }
      },
      {
        type: 'input',
        subType: "text",
        key: 'registrationTime',
        value: registrationTime,
        label: (
          <span className={classNames("form-item-label")}>登记时间</span>
        ),
        name: 'registrationTime',
        require: true,
        placeholder: '自动获取',
        callback: (e: any) => {
          setState("update", { registrationTime: e.target.value.trim()})
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
        require: true,
        placeholder: '请输入报告人',
        callback: (value: any) => {
          setState("update", { discoveryChannels: value})
        }
      },
      {
        type: 'select',
        key: 'reportedBy',
        value: reportedBy,
        label: (
          <span className={classNames("form-item-label")}>报告人</span>
        ),
        name: 'reportedBy',
        require: true,
        callback: (value: any) => {
          setState("update", { reportedBy: value})
        }
      },
      {
        type: 'select',
        key: 'discoveryTime',
        value: discoveryTime,
        label: (
          <span className={classNames("form-item-label")}>发现时间</span>
        ),
        name: 'discoveryTime',
        require: true,
        placeholder: '请输入报告人',
        callback: (value: any) => {
          setState("update", { discoveryTime: value})
        }
      }
    ],
  }

  const handleForm = {
    name: 'form',
    inRow: true,
    layout: "horizontal",
    labelAlign: "left",
    items: [
      {
        type: 'input',
        subType: "text",
        key: 'status',
        value: status,
        label: (
          <span className={classNames("form-item-label")}>状态</span>
        ),
        name: 'status',
        require: true,
        disabled: true,
        callback: (e: any) => {
          setState("update", { status: e.target.value.trim()})
        }
      },
      {
        type: 'select',
        key: 'impactSystem',
        value: impactSystem,
        label: (
          <span className={classNames("form-item-label")}>影响系统</span>
        ),
        name: 'impactSystem',
        require: true,
        callback: (value: any) => {
          setState("update", { impactSystem: value})
        }
      },
      {
        type: 'select',
        key: 'handleGroup',
        value: handleGroup,
        label: (
          <span className={classNames("form-item-label")}>处理组</span>
        ),
        name: 'handleGroup',
        require: true,
        callback: (value: any) => {
          setState("update", { handleGroup: value})
        }
      },
      {
        type: 'select',
        key: 'handler',
        value: handler,
        label: (
          <span className={classNames("form-item-label")}>处理人</span>
        ),
        name: 'handler',
        require: true,
        callback: (value: any) => {
          setState("update", { handler: value})
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
          <HandleInformation handleForm={handleForm}/>
          <AttachmentUpload />
        </div>
      </section>
    </PageLayout>
  )
}

export default ReceiveAssign