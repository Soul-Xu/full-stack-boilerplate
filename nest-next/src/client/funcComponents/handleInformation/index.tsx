import FormLayout from '../../components/formLayout';
import CustomLayout from '../customLayout/index';
import styles from "./index.module.scss"
import classnames from "classnames/bind";
const classNames = classnames.bind(styles);

import { useImmerReducer } from "use-immer";
import { reducer } from "../../utils/reducer";
import { useDispatch, useSelector } from "react-redux";

const initialState = {
  status: "", // 状态
  impactSystem: "", // 影响系统
  discoveryTime: "", // 发现时间
  handleGroup: "", // 处理组
  subClass: "", // 子类
  occurrenceTime: "", // 发生时间
  handler: "", // 处理人
  region: "", // 区域
  reportTime: "", // 上报时间
  effect: "", // 影响
  processingPriority: "", // 处理优先级
  processingFinishTime: "", // 处理完成时间
  urgency: "", // 紧急程度
  problemSolvedTime: "" // 问题解决时间
}

const HandleInformation = () => {
  const dispatchRedux = useDispatch();
  const [data, dispatch] = useImmerReducer(reducer, initialState);
  const { 
    status, impactSystem, discoveryTime, handleGroup, subClass, occurrenceTime, 
    handler, region, reportTime, effect, processingPriority, processingFinishTime,
    urgency, problemSolvedTime
  } = data as any;
  const setState = (type: string, val: Record<string, any>) => {
    dispatch({ type, payload: val });
  };

  const formObj = {
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
        type: 'input',
        subType: "text",
        key: 'discoveryTime',
        value: discoveryTime,
        label: '发现时间',
        name: 'discoveryTime',
        require: true,
        callback: (e: any) => {
          setState("update", { discoveryTime: e.target.value.trim()})
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
        key: 'subClass',
        value: subClass,
        label: '子类',
        name: 'subClass',
        callback: (value: any) => {
          setState("update", { subClass: value})
        }
      },
      {
        type: 'input',
        subType: "text",
        key: 'occurrenceTime',
        value: occurrenceTime,
        label: '发生时间',
        name: 'occurrenceTime',
        require: true,
        callback: (e: any) => {
          setState("update", { occurrenceTime: e.target.value.trim()})
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
      {
        type: 'select',
        key: 'region',
        value: region,
        label: '区域',
        name: 'region',
        callback: (value: any) => {
          setState("update", { region: value})
        }
      },
      {
        type: 'input',
        subType: "text",
        key: 'reportTime',
        value: reportTime,
        label: '上报时间',
        name: 'reportTime',
        callback: (e: any) => {
          setState("update", { reportTime: e.target.value.trim()})
        }
      },
      {
        type: 'select',
        key: 'effect',
        value: effect,
        label: '影响',
        name: 'effect',
        callback: (value: any) => {
          setState("update", { effect: value})
        }
      },
      {
        type: 'select',
        key: 'processingPriority',
        value: processingPriority,
        label: '影响',
        name: 'processingPriority',
        callback: (value) => {
          setState("update", { processingPriority: value})
        }
      },
      {
        type: 'input',
        subType: "text",
        key: 'processingFinishTime',
        value: processingFinishTime,
        label: '处理完成时间',
        name: 'processingFinishTime',
        require: true,
        callback: (e: any) => {
          setState("update", { processingFinishTime: e.target.value.trim()})
        }
      },
      {
        type: 'select',
        key: 'urgency',
        value: urgency,
        label: '紧急程度',
        name: 'urgency',
        callback: (value: any) => {
          setState("update", { urgency: value})
        }
      },
      {
        type: 'input',
        subType: "text",
        key: 'problemSolvedTime',
        value: problemSolvedTime,
        label: '问题解决时间',
        name: 'problemSolvedTime',
        require: true,
        callback: (e: any) => {
          setState("update", { problemSolvedTime: e.target.value.trim()})
        }
      },
    ],
  }

  return (
    <>
      <CustomLayout title="处理信息" />
      <div>
        <FormLayout formObj={formObj} />
      </div>
    </>
  )
}

export default HandleInformation