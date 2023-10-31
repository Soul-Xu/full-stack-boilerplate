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
  
  const formObj1 = {
    name: 'form1',
    layout: "horizontal",
    labelCol: {
      span: 3
    },
    wrapperCol: {
      span: 24
    },
    labelAlign: "left",
    items: [
      {
        type: 'input',
        subType: "text",
        key: 'title',
        value: title,
        label: '标题',
        name: 'title',
        useItemStyle: true,
        style: {
          width: "100%",
          height: "30px",
          fontSize: "14px",
          color: "rgba(0, 0, 0, 0.25)",
          border: "1px solid #9d9d9d",
          borderRadius: "6px",
          background: "#ffffff",
          padding: "4px 11px"
        },
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
        useItemStyle: true,
        style: {
          width: "100%",
          // height: "30px",
          fontSize: "14px",
          color: "rgba(0, 0, 0, 0.25)",
          border: "1px solid #9d9d9d",
          borderRadius: "6px",
          background: "#ffffff",
          // padding: "4px 11px"
        },
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
        label: '登记时间',
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
        label: '发现渠道',
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
        label: '报告人',
        name: 'reportedBy',
        require: true,
        placeholder: '请输入报告人',
        callback: (value: any) => {
          setState("update", { reportedBy: value})
        }
      }
    ],
  }

  return (
    <>
      <CustomLayout title="基本信息" />
      <div>
        <FormLayout formObj={formObj1} />
        <div className={classNames("divide-line")}></div>
        <FormLayout formObj={formObj2} />
      </div>
    </>
  )
}

export default BasicInformation