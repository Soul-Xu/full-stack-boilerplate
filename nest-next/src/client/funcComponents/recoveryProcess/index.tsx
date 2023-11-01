import FormLayout from '../../components/formLayout';
import CustomLayout from '../customLayout/index';
import { Checkbox } from 'antd'
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import styles from "./index.module.scss"
import classnames from "classnames/bind";
const classNames = classnames.bind(styles);

import { useImmerReducer } from "use-immer";
import { reducer } from "../../utils/reducer";
import { useDispatch, useSelector } from "react-redux";

import { Divider } from 'antd';

const initialState = {
  recoveryCode: "", // 恢复代码
  potentialProblem: false, // 潜在问题
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

const RecoveryProcess = (props) => {
  const { form3, showForm4 } = props
  const dispatchRedux = useDispatch();
  const [data, dispatch] = useImmerReducer(reducer, initialState);
  const { 
    recoveryCode, recoveryProcessDescription, availabilityImpact,
    mainFollowUpTeam, availabilityFollowUpEr, assistFollowUpTeam,
    businessRecoveryTime, affectedDuration, availabilityRate,
    businessImpactRatio, responsibleTeamAndProportion,
    businessImpactOverview, potentialProblem
  } = data as any;
  const setState = (type: string, val: Record<string, any>) => {
    dispatch({ type, payload: val });
  };
  
  const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };

  const formObj1 = {
    inRow: true,
    name: 'recovery-form-one',
    layout: "horizontal",
    labelAlign: "left",
    items: [
      {
        type: 'select',
        key: 'recoveryCode',
        value: recoveryCode,
        label: (
          <span className={classNames("form-item-label-option")}>恢复代码</span>
        ),
        name: 'recoveryCode',
        callback: (value: any) => {
          setState("update", { recoveryCode: value})
        },
      },
      {
        type: 'checkout',
        key: 'potentialProblem',
        checked: potentialProblem,
        name: '潜在问题',
        callback: (checked: any) => {
          console.log("checked", checked)
          // setState("update", { potentialProblem: e.target.value.trim()})
        }
      },
    ],
  }

  const formObj2 = {
    name: 'recovery-form-one',
    layout: "horizontal",
    labelAlign: "left",
    items: [
      {
        type: 'input',
        subType: "area",
        key: 'recoveryProcessDescription',
        value: recoveryProcessDescription,
        label: (
          <span className={classNames("form-item-label-option")}>恢复过程描述</span>
        ),
        name: 'recoveryProcessDescription',
        callback: (e: any) => {
          setState("update", { recoveryProcessDescription: e.target.value.trim()})
        }
      },
    ],
  }

  const formObj3 = {
    name: 'recovery-form-two',
    inRow: true,
    layout: "horizontal",
    labelAlign: "left",
    items: [
      {
        type: 'select',
        key: 'availabilityImpact',
        value: availabilityImpact,
        label: (
          <span className={classNames("form-item-label-option")}>可用性影响初步评估</span>
        ),
        name: 'availabilityImpact',        
        callback: (value: any) => {
          setState("update", { availabilityImpact: value})
        }
      },
    ],
  }

  const formObj4 = {
    name: 'recovery-form-three',
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
        callback: (value: any) => {
          setState("update", { mainFollowUpTeam: value})
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
        callback: (value: any) => {
          setState("update", { availabilityFollowUpEr: value})
        }
      },
      {
        type: 'select',
        key: 'assistFollowUpTeam',
        value: assistFollowUpTeam,
        label: (
          <span className={classNames("form-item-label-option")}>协助跟进团队</span>
        ),
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
        label: (
          <span className={classNames("form-item-label-option")}>业务恢复时间</span>
        ),
        name: 'businessRecoveryTime',
        callback: (e: any) => {
          setState("update", { businessRecoveryTime: e.target.value.trim()})
        }
      },
      {
        type: 'select',
        key: 'affectedDuration',
        value: affectedDuration,
        label: (
          <span className={classNames("form-item-label-option")}>受影响时长</span>
        ),
        name: 'affectedDuration',
        callback: (value: any) => {
          setState("update", { affectedDuration: value})
        }
      },
      {
        type: 'select',
        key: 'availabilityRate',
        value: availabilityRate,
        label: (
          <span className={classNames("form-item-label-option")}>可用性定级</span>
        ),
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
        label: (
          <span className={classNames("form-item-label-option")}>业务影响比例</span>
        ),
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
        label: (
          <span className={classNames("form-item-label-option")}>责任团队及承担比例</span>
        ),
        name: 'responsibleTeamAndProportion',
        callback: (e: any) => {
          setState("update", { responsibleTeamAndProportion: e.target.value.trim()})
        }
      }
    ],
  }

  const formObj5 = {
    name: 'recovery-form-four',
    layout: "horizontal",
    labelAlign: "left",
    items: [
      {
        type: 'input',
        subType: "area",
        key: 'businessImpactOverview',
        value: businessImpactOverview,
        label: (
          <span className={classNames("form-item-label-option")}>业务影响概述</span>
        ),
        name: 'businessImpactOverview',
        callback: (e: any) => {
          setState("update", { businessImpactOverview: e.target.value.trim()})
        }
      },
    ],
  }

  const formRender3 = form3 || formObj3
  const formRender4 = showForm4 || true

  return (
    <>
      <CustomLayout title="恢复过程" />
      <div>
        <FormLayout formObj={formObj1} />
        <FormLayout formObj={formObj2} />
        <FormLayout formObj={formRender3} />
        <FormLayout formObj={formObj4} />
        <FormLayout formObj={formObj5} />
        {/* { formRender4 && <FormLayout formObj={formObj4} /> } */}
      </div>
    </>
  )
}

export default RecoveryProcess