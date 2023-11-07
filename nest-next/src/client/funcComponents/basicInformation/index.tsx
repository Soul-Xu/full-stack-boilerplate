import React from 'react'
import FormLayout from '../../components/formLayout';
import CustomLayout from '../customLayout/index';
import styles from "./index.module.scss"
import classnames from "classnames/bind";
const classNames = classnames.bind(styles);
import debounce from 'lodash/debounce';

import { useImmerReducer } from "use-immer";
import { reducer } from "../../utils/reducer";
import { useDispatch, useSelector } from "react-redux";

import { Divider } from 'antd';
import { useEffect } from 'react';

const initialState = {
  title: "", // 标题
  description: "", // 描述
  taskId: "", // 事件编号
  registrant: "", // 登记人
  showRegistrant: false,
  registrationTime: "", // 登记时间
  discoveryChannels: "", // 发现渠道
  reportedBy: "" // 报告人
}

const options = [
  {
    value: "1",
    label: "lucky"
  },
  {
    value: "2",
    label: "li"
  }
]

const BasicInformation = (props: any) => {
  const { basicFormDetail } = props
  const dispatchRedux = useDispatch();
  const [data, dispatch] = useImmerReducer(reducer, initialState);
  const { title, description, taskId, registrant, showRegistrant, registrationTime, discoveryChannels, reportedBy } = data as any;
  const setState = (type: string, val: Record<string, any>) => {
    dispatch({ type, payload: val });
  };

  const onHandleChange = debounce((key: string, value: string) => {
    setState("update", { [key]: value})
  }, 1000)

  useEffect(() => {
    if (discoveryChannels === "2") {
      setState("update", { showRegistrant: true})
    } else {
      setState("update", { showRegistrant: false})
    }
  }, [discoveryChannels])

  const formObj1 = {
    name: 'basic-form1',
    layout: "horizontal",
    labelAlign: "left",
    items: [
      {
        kind: 'input',
        type: "text",
        key: 'title',
        value: title,
        label: (
          <span className={classNames("form-item-label")}>标题</span>
        ),
        name: 'title',
        require,
        onChange: (e: any) => {
          onHandleChange('title', e.target.value.trim()) // 修复这里的参数
        }
      },
      {
        kind: 'input',
        type: "area",
        key: 'description',
        value: description,
        label: (
          <span className={classNames("form-item-label")}>描述</span>
        ),
        name: 'description',
        require,
        placeholder: '请输入描述',
        onChange: (e: any) => {
          onHandleChange('description', e.target.value.trim())
        }
      },
    ],
  }

  const formObj2 = {
    name: 'basic-form2',
    inRow: true,
    layout: "horizontal",
    labelAlign: "left",
    items: [
      {
        kind: 'input',
        type: "text",
        key: 'taskId',
        value: taskId,
        label: (
          <span className={classNames("form-item-label-option")}>事件编号</span>
        ),
        name: 'taskId',
        disabled: true,
        placeholder: '自动获取',
        onChange: (e: any) => {
          onHandleChange('taskId', e.target.value.trim())
        }
      },
      {
        kind: 'input',
        type: "text",
        key: 'registrant',
        value: registrant,
        label: (
          <span className={classNames("form-item-label-option")}>登记人</span>
        ),
        name: 'registrant',
        disabled: true,
        placeholder: '自动获取',
        onChange: (e: any) => {
          onHandleChange('registrant', e.target.value.trim())
        }
      },
      {
        kind: 'input',
        type: "text",
        key: 'registrationTime',
        value: registrationTime,
        label: (
          <span className={classNames("form-item-label-option")}>登记时间</span>
        ),
        name: 'registrationTime',
        disabled: true,
        placeholder: '自动获取',
        onChange: (e: any) => {
          onHandleChange('registrationTime', e.target.value.trim())
        }
      },
      {
        kind: 'select',
        key: 'discoveryChannels',
        value: discoveryChannels,
        label: (
          <span className={classNames("form-item-label")}>发现渠道</span>
        ),
        name: 'discoveryChannels',
        options: options,
        require: 1,
        placeholder: '请输入发现渠道',
        onChange: (value: any) => {
          onHandleChange('discoveryChannels', value)
        }
      },
      {
        kind: 'select',
        key: 'reportedBy',
        value: reportedBy,
        label: (
          <span className={classNames("form-item-label-option")}>报告人</span>
        ),
        name: 'reportedBy',
        placeholder: '请输入报告人',
        onChange: (value: any) => {
          onHandleChange('reportedBy', value)
        }
      }
    ],
  }

  const formRenderMain = formObj1
  const formRenderDetail = basicFormDetail || formObj2

  return (
    <>
      <CustomLayout title="基本信息" />
      <div>
        <FormLayout formObj={formRenderMain} />
        <Divider />
        <FormLayout formObj={formRenderDetail} />
      </div>
    </>
  )
}

export default BasicInformation