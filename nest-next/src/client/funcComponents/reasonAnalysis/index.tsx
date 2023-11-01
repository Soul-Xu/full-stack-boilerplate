import FormLayout from '../../components/formLayout';
import CustomLayout from '../customLayout/index';
import styles from "./index.module.scss"
import classnames from "classnames/bind";
const classNames = classnames.bind(styles);

import { useImmerReducer } from "use-immer";
import { reducer } from "../../utils/reducer";
import { useDispatch, useSelector } from "react-redux";

const reasons = [
  {
    value: "humanError",
    label: "人为失误"
  },
  {
    value: "externalities",
    label: "外部因素"
  },
  {
    value: "applicationSystem",
    label: "应用系统"
  },
  {
    value: "process",
    label: "流程"
  },
  {
    value: "equipmentImplementation",
    label: "设备实施"
  },
  {
    value: "supplier",
    label: "供应商"
  },
]

const initialState = {
  reasonClassify: "", // 原因分类
  luckyTip: "", // 做得好及幸运的地方
  triggerAnalysis: "", // 触发条件及原因分析
}

const ReasonAnalysis = () => {
  const dispatchRedux = useDispatch();
  const [data, dispatch] = useImmerReducer(reducer, initialState);
  const { reasonClassify, luckyTip, triggerAnalysis } = data as any;
  const setState = (type: string, val: Record<string, any>) => {
    dispatch({ type, payload: val });
  };
  
  const formObj = {
    name: 'form',
    layout: "horizontal",
    labelAlign: "left",
    items: [
      {
        type: 'select',
        key: 'reasonClassify',
        value: reasonClassify,
        label: (
          <span className={classNames("form-item-label-option")}>原因分类</span>
        ),
        name: 'reasonClassify',
        options: reasons,
        placeholder: '请选择原因分类',
        callback: (value: any) => {
          console.log("select", value)
          setState("update", { reasonClassify: value})
        }
      },
      {
        type: 'input',
        subType: "area",
        key: 'luckyTip',
        value: luckyTip,
        label: (
          <span className={classNames("form-item-label-option")}>做得好及幸运的地方</span>
        ),
        name: 'luckyTip',
        callback: (e: any) => {
          setState("update", { luckyTip: e.target.value.trim()})
        }
      },
      {
        type: 'input',
        subType: "area",
        key: 'triggerAnalysis',
        value: triggerAnalysis,
        label: (
          <span className={classNames("form-item-label-option")}>触发条件及原因分析</span>
        ),
        name: 'triggerAnalysis',
        callback: (e: any) => {
          setState("update", { triggerAnalysis: e.target.value.trim()})
        }
      },
    ],
  }

  return (
    <>
      <CustomLayout title="原因分析" />
      <div>
        <FormLayout formObj={formObj} />
      </div>
    </>
  )
}

export default ReasonAnalysis