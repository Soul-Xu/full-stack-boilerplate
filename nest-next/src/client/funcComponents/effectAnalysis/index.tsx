import FormLayout from '../../components/formLayout';
import CustomLayout from '../customLayout/index';
import styles from "./index.module.scss"
import classnames from "classnames/bind";
const classNames = classnames.bind(styles);

import { useImmerReducer } from "use-immer";
import { reducer } from "../../utils/reducer";
import { useDispatch, useSelector } from "react-redux";

const initialState = {
  legalCompliance: "", // 合法合规
  corporateBusiness: "", // 公司业务
  informationSystem: "", // 信息系统
  impactReputation: "", // 影响声誉
  others: "" // 其他
}

const areaStyle = {
  width: "100%",
  fontSize: "14px",
  color: "rgba(0, 0, 0, 0.25)",
  border: "1px solid #9d9d9d",
  borderRadius: "6px",
  background: "#ffffff",
}

const EffectAnalysis = () => {
  const dispatchRedux = useDispatch();
  const [data, dispatch] = useImmerReducer(reducer, initialState);
  const { legalCompliance, corporateBusiness, informationSystem, impactReputation, others } = data as any;
  const setState = (type: string, val: Record<string, any>) => {
    dispatch({ type, payload: val });
  };
  
  const formObj = {
    name: 'form',
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
        key: 'legalCompliance',
        value: legalCompliance,
        label: '合法合规',
        name: 'legalCompliance',
        useItemStyle: false,
        style: areaStyle,
        callback: (e: any) => {
          setState("update", { legalCompliance: e.target.value.trim()})
        }
      },
      {
        type: 'input',
        subType: "area",
        key: 'corporateBusiness',
        value: corporateBusiness,
        label: '公司业务',
        name: 'corporateBusiness',
        useItemStyle: false,
        style: areaStyle,
        callback: (e: any) => {
          setState("update", { corporateBusiness: e.target.value.trim()})
        }
      },
      {
        type: 'input',
        subType: "area",
        key: 'informationSystem',
        value: informationSystem,
        label: '信息系统',
        name: 'informationSystem',
        useItemStyle: false,
        style: areaStyle,
        callback: (e: any) => {
          setState("update", { informationSystem: e.target.value.trim()})
        }
      },
      {
        type: 'input',
        subType: "area",
        key: 'impactReputation',
        value: impactReputation,
        label: '影响声誉',
        name: 'impactReputation',
        useItemStyle: false,
        style: areaStyle,
        callback: (e: any) => {
          setState("update", { impactReputation: e.target.value.trim()})
        }
      },
      {
        type: 'input',
        subType: "area",
        key: 'others',
        value: others,
        label: '其他',
        name: 'others',
        useItemStyle: false,
        style: areaStyle,
        callback: (e: any) => {
          setState("update", { others: e.target.value.trim()})
        }
      },
    ],
  }

  return (
    <>
      <CustomLayout title="影响分析" />
      <div>
        <FormLayout formObj={formObj} />
      </div>
    </>
  )
}

export default EffectAnalysis