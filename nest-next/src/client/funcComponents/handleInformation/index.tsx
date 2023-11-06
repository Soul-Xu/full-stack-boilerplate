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

const HandleInformation = (props) => {
  const { handleForm } = props
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
    name: 'handle-form',
    inRow: true,
    layout: "horizontal",
    labelAlign: "left",
    items: [
      {
        kind: 'input',
        type: "text",
        key: 'status',
        value: status,
        label: (
          <span className={classNames("form-item-label-option")}>状态</span>
        ),
        name: 'status',
        disabled: true,
        onChange: (e: any) => {
          setState("update", { status: e.target.value.trim()})
        }
      },
      {
        kind: 'select',
        key: 'impactSystem',
        value: impactSystem,
        label: (
          <span className={classNames("form-item-label-option")}>影响系统</span>
        ),
        name: 'impactSystem',
        onChange: (value: any) => {
          setState("update", { impactSystem: value})
        }
      },
      {
        kind: 'datepicker',
        key: 'discoveryTime',
        value: discoveryTime,
        label: (
          <span className={classNames("form-item-label")}>发现时间</span>
        ),
        name: 'discoveryTime',
        require: 1,
        onChange: (e: any) => {
          setState("update", { discoveryTime: e.target.value.trim()})
        }
      },
      {
        kind: 'select',
        key: 'handleGroup',
        value: handleGroup,
        label: (
          <span className={classNames("form-item-label")}>处理组</span>
        ),
        name: 'handleGroup',
        require: 1,
        onChange: (value: any) => {
          setState("update", { handleGroup: value})
        }
      },
      {
        kind: 'select',
        key: 'subClass',
        value: subClass,
        label: (
          <span className={classNames("form-item-label-option")}>子类</span>
        ),
        name: 'subClass',
        onChange: (value: any) => {
          setState("update", { subClass: value})
        }
      },
      {
        kind: 'datepicker',
        key: 'occurrenceTime',
        value: occurrenceTime,
        label: (
          <span className={classNames("form-item-label-option")}>发生时间</span>
        ),
        name: 'occurrenceTime',
        onChange: (e: any) => {
          setState("update", { occurrenceTime: e.target.value.trim()})
        }
      },
      {
        kind: 'select',
        key: 'handler',
        value: handler,
        label: (
          <span className={classNames("form-item-label")}>处理人</span>
        ),
        name: 'handler',
        require: 1,
        onChange: (value: any) => {
          setState("update", { handler: value})
        }
      },
      {
        kind: 'select',
        key: 'region',
        value: region,
        label: (
          <span className={classNames("form-item-label-option")}>区域</span>
        ),
        name: 'region',
        onChange: (value: any) => {
          setState("update", { region: value})
        }
      },
      {
        kind: 'datepicker',
        key: 'reportTime',
        value: reportTime,
        label: (
          <span className={classNames("form-item-label-option")}>上报时间</span>
        ),
        name: 'reportTime',
        onChange: (e: any) => {
          setState("update", { reportTime: e.target.value.trim()})
        }
      },
      {
        kind: 'select',
        key: 'effect',
        value: effect,
        label: (
          <span className={classNames("form-item-label-option")}>影响</span>
        ),
        name: 'effect',
        onChange: (value: any) => {
          setState("update", { effect: value})
        }
      },
      {
        kind: 'select',
        key: 'processingPriority',
        value: processingPriority,
        label: (
          <span className={classNames("form-item-label-option")}>处理优先级</span>
        ),
        name: 'processingPriority',
        disabled: true,
        onChange: (value) => {
          setState("update", { processingPriority: value})
        }
      },
      {
        kind: 'datepicker',
        key: 'processingFinishTime',
        value: processingFinishTime,
        label: (
          <span className={classNames("form-item-label-option")}>处理完成时间</span>
        ),
        name: 'processingFinishTime',
        onChange: (e: any) => {
          setState("update", { processingFinishTime: e.target.value.trim()})
        }
      },
      {
        kind: 'select',
        key: 'urgency',
        value: urgency,
        label: (
          <span className={classNames("form-item-label-option")}>紧急程度</span>
        ),
        name: 'urgency',
        onChange: (value: any) => {
          setState("update", { urgency: value})
        }
      },
      {
        kind: 'datepicker',
        key: 'problemSolvedTime',
        value: problemSolvedTime,
        label: (
          <span className={classNames("form-item-label-option")}>问题解决时间</span>
        ),
        name: 'problemSolvedTime',
        onChange: (e: any) => {
          setState("update", { problemSolvedTime: e.target.value.trim()})
        }
      },
    ],
  }

  const handleRender = handleForm || formObj

  return (
    <>
      <CustomLayout title="处理信息" />
      <div>
        <FormLayout formObj={handleRender} />
      </div>
    </>
  )
}

export default HandleInformation