import FormLayout from '../../components/formLayout';
import styles from "./index.module.scss"
import classnames from "classnames/bind";
const classNames = classnames.bind(styles);
// import { useImmerReducer } from "use-immer";
// import { reducer } from "../../utils/reducer";
import { useDispatch, useSelector } from "react-redux";

import { Button } from 'antd';

const SubmitElement = (props: any) => {
  const dispatchRedux = useDispatch()

  const onSubmit = () => {
    console.log("onSubmit")
  }
  
  const formObj = {
    name: 'submit-form',
    layout: "horizontal",
    items: [
      {
        kind: 'action',
        key: 'action',
        name: 'submit',
        customElement: (
          <section className={classNames("form-item-action")}>
            <Button 
              type="primary" 
              htmlType="submit"
              onClick={onSubmit}
            >
              提交
            </Button>
          </section>
        )
      }
    ],
  }

  return (
    <div>
      <FormLayout formObj={formObj} />
    </div>
  )
}

export default SubmitElement