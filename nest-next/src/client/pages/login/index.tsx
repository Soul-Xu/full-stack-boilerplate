import { ChangeEvent, useCallback, useEffect, useReducer, useState } from "react";
import Image from 'next/image'
import { useRouter } from 'next/router'
import styles from "./index.module.scss";
import { Button, Checkbox, Form, Input, message } from 'antd';
import asyncThunk from "../../store/asyncThunk"
import { useImmerReducer } from "use-immer";
import { reducer } from "../../utils/reducer";
import { useDispatch, useSelector } from "react-redux";
import classnames from "classnames/bind";
const classNames = classnames.bind(styles);

import FormLayout from "../../components/formLayout"
import { authState, setAuthState } from "../../store/modules/authSlice"
import { setUserInfo } from "../../store/modules/loginSlice";

/** images */
import ImgLogo from "public/images/logo.png"

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
  const dispatchRedux = useDispatch();
  const [data, dispatch] = useImmerReducer(reducer, initialState);
  const { username, password } = data as any;
  const router = useRouter()

  const setState = (type: string, val: Record<string, any>) => {
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
    // @ts-ignore
    const res = await dispatchRedux(asyncThunk.login(params));
    const data = res?.payload
    if (data?.code === 200) {
      dispatchRedux(setAuthState({
        authState: true
      }))
      message.success("登录成功")
      // navigate("/home", { replace: true });
    } else {
      message.error("登录失败，请重试")
    }
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
      <div className={classNames("login-form")}>
        <div className={classNames("form-title")}>
          <Image src={ImgLogo} alt="云速易连" width={132} height={48} />
        </div>
        <div className={classNames("form-content")}>
          <FormLayout formObj={formObj} />
        </div>
      </div>
    </section>
  )
}

export default Login