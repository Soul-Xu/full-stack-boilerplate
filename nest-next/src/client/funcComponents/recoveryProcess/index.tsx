import FormLayout from '../../components/formLayout';
import CustomLayout from '../customLayout/index';
import { Checkbox } from 'antd'
import styles from "./index.module.scss"
import classnames from "classnames/bind";
const classNames = classnames.bind(styles);

import { useImmerReducer } from "use-immer";
import { reducer } from "../../utils/reducer";
import { useDispatch, useSelector } from "react-redux";

const initialState = {
  recoveryCode: "", // 恢复代码
  potentialProblem: "", // 潜在问题
  recoveryProcessDescription: "", // 恢复过程描述
  availabilityImpact: "", // 可用性影响初步评估
  mainFollowUpTeam: "", // 主要跟进团队
  availabilityFollowUpEr: "", // 可用性跟进人 
  assistFollowUpTeam: "", // 协助跟进团队
  businessRecoveryTime: "", // 业务恢复时间
  affectedDuration: "", // 受影响时长
  availabilityRate: "", // 可用性定级
  businessImpactRatio: "", // 业务影响比例
  responsibleTeamAndProportion: "", // 责任团队及承担比例
  businessImpactOverview: "" // 业务影响概述
}

const RecoveryProcess = () => {
  const dispatchRedux = useDispatch();
  const [data, dispatch] = useImmerReducer(reducer, initialState);
  const { 
    recoveryCode, recoveryProcessDescription, availabilityImpact,
    mainFollowUpTeam, availabilityFollowUpEr, assistFollowUpTeam,
    businessRecoveryTime, affectedDuration, availabilityRate,
    businessImpactRatio, responsibleTeamAndProportion,
    businessImpactOverview
  } = data as any;
  const setState = (type: string, val: Record<string, any>) => {
    dispatch({ type, payload: val });
  };
  
  const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };

  const formObj1 = {
    name: 'recovery-form-one',
    layout: "horizontal",
    labelCol: {
      span: 4
    },
    wrapperCol: {
      span: 20
    },
    labelAlign: "left",
    items: [
      {
        type: 'select',
        key: 'recoveryCode',
        value: recoveryCode,
        label: '恢复代码',
        name: 'recoveryCode',
        callback: (value: any) => {
          setState("update", { recoveryCode: value})
        },
        customElement: (
          <>
            <Checkbox onChange={onChange}>潜在问题</Checkbox>
          </>
        )
      },
      {
        type: 'input',
        subType: "area",
        key: 'recoveryProcessDescription',
        value: recoveryProcessDescription,
        label: '恢复过程描述',
        name: 'recoveryProcessDescription',
        useItemStyle: false,
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
        // placeholder: '请输入描述',
        callback: (e: any) => {
          setState("update", { recoveryProcessDescription: e.target.value.trim()})
        }
      },
    ],
  }

  const formObj2 = {
    name: 'recovery-form-two',
    inRow: true,
    layout: "horizontal",
    labelCol: {
      span: 12
    },
    wrapperCol: {
      span: 12
    },
    labelAlign: "left",
    items: [
      {
        type: 'select',
        key: 'availabilityImpact',
        value: availabilityImpact,
        label: '可用性影响初步评估',
        name: 'availabilityImpact',
        callback: (value: any) => {
          setState("update", { availabilityImpact: value})
        }
      },
    ],
  }

  const formObj3 = {
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
      {
        type: 'input',
        subType: "text",
        key: 'businessRecoveryTime',
        value: businessRecoveryTime,
        label: '业务恢复时间',
        name: 'businessRecoveryTime',
        require: true,
        callback: (e: any) => {
          setState("update", { businessRecoveryTime: e.target.value.trim()})
        }
      },
      {
        type: 'input',
        subType: "text",
        key: 'businessRecoveryTime',
        value: businessRecoveryTime,
        label: '业务恢复时间',
        name: 'businessRecoveryTime',
        callback: (e: any) => {
          setState("update", { businessRecoveryTime: e.target.value.trim()})
        }
      },
      {
        type: 'select',
        key: 'affectedDuration',
        value: affectedDuration,
        label: '受影响时长',
        name: 'affectedDuration',
        callback: (value: any) => {
          setState("update", { affectedDuration: value})
        }
      },
      {
        type: 'select',
        key: 'availabilityRate',
        value: availabilityRate,
        label: '可用性定级',
        name: 'availabilityRate',
        callback: (value: any) => {
          setState("update", { availabilityRate: value})
        }
      },
      {
        type: 'input',
        subType: "text",
        key: 'businessImpactRatio',
        value: businessImpactRatio,
        label: '业务影响比例',
        name: 'businessImpactRatio',
        callback: (e: any) => {
          setState("update", { businessImpactRatio: e.target.value.trim()})
        }
      },
      {
        type: 'input',
        subType: "text",
        key: 'responsibleTeamAndProportion',
        value: responsibleTeamAndProportion,
        label: '责任团队及承担比例',
        name: 'responsibleTeamAndProportion',
        callback: (e: any) => {
          setState("update", { responsibleTeamAndProportion: e.target.value.trim()})
        }
      }
    ],
  }

  const formObj4 = {
    name: 'recovery-form-four',
    layout: "horizontal",
    labelCol: {
      span: 4
    },
    wrapperCol: {
      span: 20
    },
    labelAlign: "left",
    items: [
      {
        type: 'input',
        subType: "area",
        key: 'businessImpactOverview',
        value: businessImpactOverview,
        label: '业务影响概述',
        name: 'businessImpactOverview',
        useItemStyle: false,
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
        // placeholder: '请输入描述',
        callback: (e: any) => {
          setState("update", { businessImpactOverview: e.target.value.trim()})
        }
      },
    ],
  }

  return (
    <>
      <CustomLayout title="恢复过程" />
      <div>
        <FormLayout formObj={formObj1} />
        <div className={classNames("divide-line")}></div>
        <FormLayout formObj={formObj2} />
        <div className={classNames("divide-line")}></div>
        <FormLayout formObj={formObj3} />
        <FormLayout formObj={formObj4} />
      </div>
    </>
  )
}

export default RecoveryProcess