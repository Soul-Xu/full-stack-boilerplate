import FormLayout from '../../components/formLayout';
import CustomLayout from '../customLayout/index';
import styles from "./index.module.scss"
import classnames from "classnames/bind";
const classNames = classnames.bind(styles);

import { useImmerReducer } from "use-immer";
import { reducer } from "../../utils/reducer";
import { useDispatch, useSelector } from "react-redux";

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

const BasicInformation = () => {
  const dispatchRedux = useDispatch();
  const [data, dispatch] = useImmerReducer(reducer, initialState);
  const { title, description, taskId, registrant, registrationTime, discoveryChannels, reportedBy, discoverer } = data as any;
  const setState = (type: string, val: Record<string, any>) => {
    dispatch({ type, payload: val });
  };
  
  const formObj = {
    name: 'form',
    layout: '',
    labelAlign: "right",
    items: [
      {
        type: 'input',
        subType: "text",
        key: 'title',
        value: title,
        label: '标题',
        name: 'title',
        require,
        placeholder: '请输入标题',
        callback: (e: any) => {
          setState("update", { title: e.target.value.trim()})
        }
      },
      {
        type: 'input',
        subType: "area",
        key: 'description',
        value: description,
        label: '描述',
        name: 'description',
        require,
        placeholder: '请输入描述',
        callback: (e: any) => {
          setState("update", { description: e.target.value.trim()})
        }
      },
      {
        type: 'input',
        subType: "text",
        key: 'taskId',
        value: taskId,
        label: '事件编号',
        name: 'taskId',
        placeholder: '请输入事件编号',
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
        placeholder: '请输入登记人',
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
        placeholder: '请输入登记时间',
        callback: (e: any) => {
          setState("update", { registrationTime: e.target.value.trim()})
        }
      },
      {
        type: 'input',
        subType: "text",
        key: 'discoveryChannels',
        value: discoveryChannels,
        label: '发现渠道',
        name: 'discoveryChannels',
        placeholder: '请输入发现渠道',
        callback: (e: any) => {
          setState("update", { discoveryChannels: e.target.value.trim()})
        }
      },
      {
        type: 'input',
        subType: "text",
        key: 'reportedBy',
        value: reportedBy,
        label: '报告人',
        name: 'reportedBy',
        placeholder: '请输入报告人',
        callback: (e: any) => {
          setState("update", { reportedBy: e.target.value.trim()})
        }
      },
      {
        type: 'input',
        subType: "text",
        key: 'discoverer',
        value: discoverer,
        label: '发现人',
        name: 'discoverer',
        placeholder: '请输入发现人',
        callback: (e: any) => {
          setState("update", { discoverer: e.target.value.trim()})
        }
      },
    ],
  }


  return (
    <>
      <CustomLayout title="基本信息" />
      <div>
        <FormLayout formObj={formObj} />
      </div>
    </>
  )
}

export default BasicInformation