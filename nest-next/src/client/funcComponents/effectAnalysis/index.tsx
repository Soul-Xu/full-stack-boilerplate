import FormLayout from '../../components/formLayout';
import CustomLayout from '../customLayout/index';
import styles from "./index.module.scss"
import classnames from "classnames/bind";
const classNames = classnames.bind(styles);
import debounce from 'lodash/debounce';

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

const EffectAnalysis = () => {
  const dispatchRedux = useDispatch();
  const [data, dispatch] = useImmerReducer(reducer, initialState);
  const { legalCompliance, corporateBusiness, informationSystem, impactReputation, others } = data as any;
  const setState = (type: string, val: Record<string, any>) => {
    dispatch({ type, payload: val });
  };
  
  const onHandleChange = debounce((key: string, value: string) => {
    setState("update", { [key]: value})
  }, 1000)

  const formObj = {
    name: 'effect-form',
    layout: "horizontal",
    labelAlign: "left",
    items: [
      {
        kind: 'input',
        type: "area",
        key: 'legalCompliance',
        value: legalCompliance,
        label: (
          <span className={classNames("form-item-label-option")}>合法合规</span>
        ),
        name: 'legalCompliance',
        onChange: (e: any) => {
          onHandleChange("legalCompliance", e.target.value.trim())
        }
      },
      {
        kind: 'input',
        type: "area",
        key: 'corporateBusiness',
        value: corporateBusiness,
        label: (
          <span className={classNames("form-item-label-option")}>公司业务</span>
        ),
        name: 'corporateBusiness',
        onChange: (e: any) => {
          onHandleChange("corporateBusiness", e.target.value.trim())
        }
      },
      {
        kind: 'input',
        type: "area",
        key: 'informationSystem',
        value: informationSystem,
        label: (
          <span className={classNames("form-item-label-option")}>信息系统</span>
        ),
        name: 'informationSystem',
        onChange: (e: any) => {
          onHandleChange("informationSystem", e.target.value.trim())
        }
      },
      {
        kind: 'input',
        type: "area",
        key: 'impactReputation',
        value: impactReputation,
        label: (
          <span className={classNames("form-item-label-option")}>影响声誉</span>
        ),
        name: 'impactReputation',
        onChange: (e: any) => {
          onHandleChange("impactReputation", e.target.value.trim())
        }
      },
      {
        kind: 'input',
        type: "area",
        key: 'others',
        value: others,
        label: (
          <span className={classNames("form-item-label-option")}>其他</span>
        ),
        name: 'others',
        onChange: (e: any) => {
          onHandleChange("others", e.target.value.trim())
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