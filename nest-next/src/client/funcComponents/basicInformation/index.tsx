import FormLayout from '../../components/formLayout';
import CustomLayout from '../customLayout/index';
import styles from "./index.module.scss"
import classnames from "classnames/bind";
const classNames = classnames.bind(styles);

import { useImmerReducer } from "use-immer";
import { reducer } from "../../utils/reducer";
import { useDispatch, useSelector } from "react-redux";

import { Divider } from 'antd';

const initialState = {
  title: "", // 标题
  description: "", // 描述
  taskId: "", // 事件编号
  registrant: "", // 登记人
  registrationTime: "", // 登记时间
  discoveryChannels: "", // 发现渠道
  reportedBy: "", // 报告人
  discoverer: "", // 发现者
}

const BasicInformation = (props: any) => {
  const { basicFormDetail } = props
  const dispatchRedux = useDispatch();
  const [data, dispatch] = useImmerReducer(reducer, initialState);
  const { title, description, taskId, registrant, registrationTime, discoveryChannels, reportedBy, discoverer } = data as any;
  const setState = (type: string, val: Record<string, any>) => {
    dispatch({ type, payload: val });
  };
  
  const formObj1 = {
    name: 'basic-form1',
    layout: "horizontal",
    labelAlign: "left",
    items: [
      {
        type: 'input',
        subType: "text",
        key: 'title',
        value: title,
        label: (
          <span className={classNames("form-item-label")}>标题</span>
        ),
        name: 'title',
        require,
        callback: (e: any) => {
          setState("update", { title: e.target.value.trim()})
        }
      },
      {
        type: 'input',
        subType: "area",
        key: 'description',
        value: description,
        label: (
          <span className={classNames("form-item-label")}>描述</span>
        ),
        name: 'description',
        require,
        placeholder: '请输入描述',
        callback: (e: any) => {
          setState("update", { description: e.target.value.trim()})
        }
      },
    ],
  }

  const formObj2 = {
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
          <span className={classNames("form-item-label-option")}>事件编号</span>
        ),
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
        label: (
          <span className={classNames("form-item-label-option")}>登记人</span>
        ),
        name: 'registrant',
        disabled: true,
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
          <span className={classNames("form-item-label-option")}>登记时间</span>
        ),
        name: 'registrationTime',
        disabled: true,
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
        placeholder: '请输入发现渠道',
        callback: (value: any) => {
          setState("update", { discoveryChannels: value})
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
        placeholder: '请输入报告人',
        callback: (value: any) => {
          setState("update", { reportedBy: value})
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