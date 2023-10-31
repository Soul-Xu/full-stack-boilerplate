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
    labelCol: {
      span: 10
    },
    wrapperCol: {
      span: 14
    },
    labelAlign: "right",
    items: [
      {
        type: 'input',
        subType: "text",
        key: 'taskId',
        value: taskId,
        label: '事件编号',
        name: 'taskId',
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
        label: '登记人',
        name: 'registrant',
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
        label: '登记时间',
        name: 'registrationTime',
        placeholder: '自动获取',
        callback: (e: any) => {
          setState("update", { registrationTime: e.target.value.trim()})
        }
      },
      {
        type: 'select',
        key: 'discoveryChannels',
        value: discoveryChannels,
        label: '发现渠道',
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
        label: '报告人',
        name: 'reportedBy',
        callback: (value: any) => {
          setState("update", { reportedBy: value})
        }
      },
      {
        type: 'select',
        key: 'discoveryTime',
        value: discoveryTime,
        label: '发现时间',
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
    labelCol: {
      span: 10
    },
    wrapperCol: {
      span: 16
    },
    labelAlign: "right",
    items: [
      {
        type: 'input',
        subType: "text",
        key: 'status',
        value: status,
        label: '状态',
        name: 'status',
        disabled: true,
        callback: (e: any) => {
          setState("update", { status: e.target.value.trim()})
        }
      },
      {
        type: 'select',
        key: 'impactSystem',
        value: impactSystem,
        label: '影响系统',
        name: 'impactSystem',
        callback: (value: any) => {
          setState("update", { impactSystem: value})
        }
      },
      {
        type: 'select',
        key: 'handleGroup',
        value: handleGroup,
        label: '处理组',
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
        label: '处理人',
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
        <div className={classNames("container-title")}>事件管理</div>
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