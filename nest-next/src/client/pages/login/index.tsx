import { ChangeEvent, useCallback, useEffect, useReducer, useState } from "react";
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Button, Checkbox, Form, Input, message } from 'antd';
import asyncThunk from "../../store/asyncThunk"
import { useImmerReducer } from "use-immer";
import { reducer } from "../../utils/reducer";
import { useDispatch, useSelector } from "react-redux";
import styles from "./index.module.scss";
import classnames from "classnames/bind";
const classNames = classnames.bind(styles);

import FormLayout from "../../components/formLayout"
import { authState, setAuthState } from "../../store/modules/authSlice"
import { setUserInfo } from "../../store/modules/loginSlice";

/** images */
import ImgLogo from "public/images/login/anxin.png"
import ImgCorner from "public/images/login/container_corner.png"

type FieldType = {
  username?: string;
  password?: string;
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
    if (data?.code === 0) {
      dispatchRedux(setAuthState({
        authState: true
      }))
      message.success("登录成功")
      router.push("/home")
    } else {
      message.error("登录失败，请重试")
      return
    }
  }, [password, username])

  const formObj = {
    name: 'login-form',
    layout: 'vertical',
    labelAlign: "right",
    style: { maxWidth: 600 },
    items: [
      {
        kind: 'input',
        type: "text",
        key: 'username',
        value: username,
        style: {
          boxSizing: "border-box",
          width: "268px",
          height: "40px",
          padding: "8px 10px",
          background: "#FFFFFF",
          borderRadius: "2px",
          border: "1px solid #B4B9C2"
        },
        // formItemLayout,
        label: '账号',
        labelStyle: {
          height: "24px",
          fontSize: "14px",
          color: "#242424",
          lineHeight: "24px"
        },
        // name: 'username',
        placeholder: '请输入账号',
        onChange: (e: any) => {
          setState("update", { username: e.target.value.trim()})
        }
      },
      {
        kind: 'input',
        type: "password",
        key: 'password',
        value: password,
        style: {
          boxSizing: "border-box",
          width: "268px",
          height: "40px",
          padding: "8px 10px",
          background: "#FFFFFF",
          borderRadius: "2px",
          border: "1px solid #B4B9C2"
        },
        label: '密码',
        labelStyle: {
          height: "24px",
          fontSize: "14px",
          color: "#242424",
          lineHeight: "24px"
        },
        name: 'password',
        placeholder: '请输入密码',
        onChange: (e: any) => setState("update", { password: e.target.value.trim()})
      }
    ],
    customElements: () => (
      <section style={{ textAlign: "center" }}>
        <Button style={{ width: "268px", height: "40px" }} type="primary" onClick={() => onLogin()}>登录</Button>
      </section>
    )
  }

  return (
    <section className={classNames("login-container")}>
      <div className={classNames("login-form")}>
        <div className={classNames("form-title")}>
          <Image src={ImgLogo} alt="安信证劵" width={132} height={48} />
        </div>
        <div className={classNames("form-corner")}>
          <Image src={ImgCorner} alt="二维码" width={56} height={56} />
        </div>
        <div className={classNames("form-content")}>
          <FormLayout formObj={formObj} />
        </div>
      </div>
    </section>
  )
}

export default Login