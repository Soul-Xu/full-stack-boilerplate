import { ChangeEvent, useCallback, useEffect, useReducer, useState } from "react";
import styles from "./index.module.scss";
import { Button, Checkbox, Form, Input, message } from 'antd';
import { useImmerReducer } from "use-immer";
import { reducer } from "../../utils/reducer";
import { useDispatch, useSelector } from "react-redux";
import classnames from "classnames/bind";
const classNames = classnames.bind(styles);

import FormLayout from "../../components/formLayout"

type FieldType = {
  username?: string;
  password?: string;
};

const formItemLayout = {
  labelCol: {//左边文字
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {//右边输入框
      xs: { span: 24 },
      sm: { span: 16 },
  },
};

const initialState = {
  username: "", // 账号
  password: "" // 密码
}

const Login: React.FC = () => {
  const userInfo = useSelector((state: any) => state.login.userInfo)
  console.log("userInfo", userInfo)
  const dispatchRedux = useDispatch();
  const [data, dispatch] = useImmerReducer(reducer, initialState);
  const { username, password } = data as any;

  const setState = (type: string, val: Record<string, any>) => {
    console.log("type", type, val)
    dispatch({ type, payload: val });
  };

  const onLogin = useCallback(async () => {
    if (!username) {
      message.warning("账号不能为空");
      return;
    }
    if (!password) {
      message.warning("密码不能为空");
      return;
    }
    const params = {
      username,
      password
    }
    // const res: any = await authLogin(params)
    console.log("登录-res", params)
    // if (res?.data?.code === 0) {
    //   message.success("登录成功")
    //   window.localStorage.setItem("loginStatus", "true")
    //   navigate("/home", { replace: true });
    // } else {
    //   window.localStorage.removeItem("loginStatus")
    //   message.error("登录失败，请重试")
    // }
  }, [password, username])

  const formObj = {
    name: 'form',
    layout: 'horizontal',
    labelAlign: "right",
    style: { maxWidth: 600 },
    items: [
      {
        type: 'input',
        key: 'username',
        value: username,
        formItemLayout,
        label: '账号',
        name: 'username',
        placeholder: '请输入账号',
        require,
        rules: [{ required: true, message: '请输入账号' }],
        callback: (e: any) => {
          setState("update", { username: e.target.value.trim()})
        }
      },
      {
        type: 'input',
        key: 'password',
        value: password,
        formItemLayout,
        label: '密码',
        name: 'password',
        placeholder: '请输入密码',
        require,
        rules: [{ required: true, message: '请输入密码' }],
        callback: (e: any) => setState("update", { password: e.target.value.trim()})
      }
    ],
    customElements: () => (
      <section style={{ textAlign: "center" }}>
        <Button type="primary" onClick={() => onLogin()}>登录</Button>
      </section>
    )
  }

  return (
    <section className={classNames("login-container")}>
      {/* <div>云速易连</div> */}
      <div className={classNames("login-form")}>
        <h1 className={classNames("form-title")}>登录</h1>
        <div className={classNames("form-content")}>
          <FormLayout formObj={formObj} />
        </div>
      </div>
    </section>
  )
}

export default Login