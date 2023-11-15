import React, { useEffect } from 'react'
import { useRouter } from 'next/router';
import { NextPage } from 'next'
import styles from "./index.module.scss";
import classnames from "classnames/bind";
const classNames = classnames.bind(styles);
import debounce from 'lodash/debounce';
import dayjs from 'dayjs'

import { useImmerReducer } from "use-immer";
import { reducer } from "../../utils/reducer";
import { useDispatch, useSelector } from "react-redux";
import { Tabs, message, Button, Modal } from 'antd'
import { setBasicInfo } from "../../store/modules/basicInfoSlice"
import { setHandleInfo } from "../../store/modules/handleInfoSlice"
const { confirm } = Modal;

/** component */
import PageLayout from '../../layout/PageLayout'
import BasicInformation from '../../funcComponents/basicInformation/index';
import HandleInformation from '../../funcComponents/handleInformation/index';
import AttachmentUpload from '../../funcComponents/attachmentUpload/index';
import CustomLayout from "../../funcComponents/customLayout/index"

interface ReceiveAssignProps {
}

const initialState = {
  fdSubject: "", // 标题
  fdDesc: "", // 描述
  fdNo: "", // 事件编号
  fdAuthor: "", // 登记人
  fdInputTime: "", // 登记时间
  fdFindWay: "", // 发现渠道
  fdReportor: "", // 报告人
  fdReportTime: "", // 发现时间
  fdStatus: "", // 状态
  fdEffectSystem: "", // 影响系统
  fdProcessDept: "", // 处理组
  fdProcessUser: "", // 处理人
}

const frontendURL = "https://yunsucoding.landray.com.cn/web"
const processId = "1hbcove6fw3mwqa6w268kv4hofm0l21b88w2"

const ReceiveAssign: NextPage = () => {
  const router = useRouter()
  const dispatchRedux = useDispatch();
  const basicInfo: any = useSelector((state: any) => state.basic.basicInfo)
  const handleInfo: any = useSelector((state: any) => state.handle.handleInfo)
  const [data, dispatch] = useImmerReducer(reducer, initialState);
  const { 
    fdNo, fdAuthor, fdInputTime, fdFindWay, 
    fdReportor, fdReportTime, fdStatus, fdEffectSystem, fdProcessDept, fdProcessUser
  } = data as any;
  const setState = (type: string, val: Record<string, any>) => {
    dispatch({ type, payload: val });
  };

  const onHandleBasic = debounce((key: string, value: string) => {
    const newValue = key.indexOf("Time") > -1
    ? dayjs().locale('zh-cn').toString()
    : value;

    setState("update", { [key]: value });

    const updatedBasicInfo = { ...basicInfo, [key]: newValue };
    dispatchRedux(setBasicInfo(updatedBasicInfo));
  }, 1000)

  const onHandleChange = debounce((key: string, value: string) => {
    const newValue = key.indexOf("Time") > -1
      ? dayjs().locale('zh-cn').toString()
      : value;
  
    setState("update", { [key]: value });
  
    const updatedHandleInfo = { ...handleInfo, [key]: newValue };
    dispatchRedux(setHandleInfo(updatedHandleInfo));
  }, 1000);

  useEffect(() => {
    setState("update", { 
      fdInputTime: dayjs(),
      fdReportTime: dayjs()
    })
    dispatchRedux(setBasicInfo({
      ...basicInfo,
      fdInputTime: dayjs().toString(),
      fdReportTime: dayjs().toString()
    }))
  }, [])

  const fnMaps = [
    {
      id: "attachmentUpload",
      label: "附件上传",
      value: () => {
        return (
          <>
            {/* @ts-ignore */}
            <AttachmentUpload />
          </>
        )
      }
    },
  ]

  const onChange = (key: string) => {
    console.log(key);
  };

  const basicForm = {
    name: 'receive-basic-form',
    inRow: 3,
    layout: "horizontal",
    labelAlign: "right",
    items: [
      {
        kind: 'input',
        type: "text",
        key: 'fdNo',
        value: fdNo,
        label: (
          <span className={classNames("form-item-label-option")}>事件编号</span>
        ),
        name: 'fdNo',
        disabled: true,
        placeholder: '自动获取',
        onChange: (e: any) => {
          onHandleBasic("fdNo", e.target.value.trim())
        }
      },
      {
        kind: 'input',
        type: "text",
        key: 'fdAuthor',
        value: fdAuthor,
        defaultValue: "廖",
        label: (
          <span className={classNames("form-item-label-option")}>登记人</span>
        ),
        name: 'fdAuthor',
        placeholder: '自动获取',
        onChange: (e: any) => {
          onHandleBasic("fdAuthor", e.target.value.trim())
        }
      },
      {
        kind: 'datepicker',
        key: 'fdInputTime',
        value: fdInputTime,
        label: (
          <span className={classNames("form-item-label-option")}>登记时间</span>
        ),
        name: 'fdInputTime',
        format: "YYYY-MM-DD HH:mm",
        disabled: true,
        placeholder: '自动获取'
      },
      {
        kind: 'select',
        key: 'fdFindWay',
        value: fdFindWay,
        defaultValue: "监控工具",
        label: (
          // <span className={classNames("form-item-label")}>发现渠道</span>
          <span className={classNames("form-item-label-option")}>
            <span className={classNames("form-item-require")}>*</span>
            发现渠道
          </span>
        ),
        name: 'fdFindWay',
        // require: 1,
        // placeholder: '请输入报告人',
        options: [
          {
            value: 1,
            label: 1
          },
          {
            value: 2,
            label: 2
          },
        ],
        onChange: (value: any) => {
          onHandleBasic("fdFindWay", value)
        }
      },
      {
        kind: 'select',
        key: 'fdReportor',
        value: fdReportor,
        defaultValue: "廖",
        label: (
          <span className={classNames("form-item-label-option")}>报告人</span>
        ),
        name: 'fdReportor',
        onChange: (value: any) => {
          onHandleBasic("fdReportor", value)
        }
      },
      {
        kind: 'datepicker',
        key: 'fdReportTime',
        value: fdReportTime,
        defaultValue: "2023-11-06 08:23:23",
        label: (
          // <span className={classNames("form-item-label")}>发现时间</span>
          <span className={classNames("form-item-label-option")}>
            <span className={classNames("form-item-require")}>*</span>
            发现时间
          </span>
        ),
        name: 'fdReportTime',
        // require: 1,
        // placeholder: '请输入报告人',
        onChange: (value: any) => {
          onHandleBasic("fdReportTime", value)
        }
      }
    ],
  }

  const handleForm = {
    name: 'receive-handle-form',
    inRow: 3,
    layout: "horizontal",
    labelAlign: "right",
    items: [
      {
        kind: 'input',
        type: "text",
        key: 'fdStatus',
        value: fdStatus,
        defaultValue: "未处理",
        label: (
          <span className={classNames("form-item-label-option")}>状态</span>
        ),
        name: 'fdStatus',
        disabled: true,
        onChange: (e: any) => {
          onHandleChange("fdStatus", e.target.value.trim())
        }
      },
      {
        kind: 'select',
        key: 'fdEffectSystem',
        value: fdEffectSystem,
        defaultValue: "融资融劵系统",
        label: (
          <span className={classNames("form-item-label-option")}>影响系统</span>
        ),
        name: 'fdEffectSystem',
        onChange: (value: any) => {
          onHandleChange("fdEffectSystem", value)
        }
      },
      {
        kind: 'select',
        key: 'fdProcessDept',
        value: fdProcessDept,
        defaultValue: "运维三室",
        label: (
          // <span className={classNames("form-item-label")}>处理组</span>
          <span className={classNames("form-item-label-option")}>
            <span className={classNames("form-item-require")}>*</span>
            处理组
          </span>
        ),
        name: 'fdProcessDept',
        options: [
          {
            value: "group-1",
            label: "group-1"
          },
          {
            value: "group-2",
            label: "group-2"
          },
        ],
        // require: 1,
        onChange: (value: any) => {
          onHandleChange("fdProcessDept", value)
        }
      },
      {
        kind: 'select',
        key: 'fdProcessUser',
        value: fdProcessUser,
        defaultValue: "徐工",
        label: (
          // <span className={classNames("form-item-label")}>处理人</span>
          <span className={classNames("form-item-label-option")}>
            <span className={classNames("form-item-require")}>*</span>
            处理人
          </span>
        ),
        name: 'fdProcessUser',
        options: [
          {
            value: "ling",
            label: "ling"
          },
          {
            value: "ming",
            label: "ming"
          },
        ],
        // require: 1,
        onChange: (value: any) => {
          onHandleChange("fdProcessUser", value)
        }
      },
    ],
  }

  // 点击提交按钮表单校验逻辑
  const onSubmit = () => {
    const { fdSubject, fdDesc, fdFindWay, fdReportTime } = basicInfo
    const { fdProcessDept, fdProcessUser } = handleInfo
    
    // 表单必填项验证
    // if (!fdSubject) {
    //   message.warning("标题不能为空")
    //   return
    // }
    // if (!fdDesc) {
    //   message.warning("描述不能为空")
    //   return
    // }
    // if (!fdFindWay) {
    //   message.warning("发现渠道不能为空")
    //   return
    // }
    // if (!fdReportTime) {
    //   message.warning("发现时间不能为空")
    //   return
    // }
    // if (!fdProcessDept) {
    //   message.warning("处理组不能为空")
    //   return
    // }
    // if (!fdProcessUser) {
    //   message.warning("fdProcessUser不能为空")
    //   return
    // }

    // 节点审批弹窗
    handleSubmit()
  }

  // 节点审批的函数
  const handleSubmit = () => {
    // 弹出确认框
    confirm({
      title: "节点审批",
      content: `是否确定通过该节点的审批？`,
      onOk() {
        // 跳转到下一个节点
        message.success("通过该节点的审批，即将进入下一节点");
        router.push("/diagnosisRecovery")
      },
      onCancel() {
        message.info("拒绝该节点的审批");
        return
      }
    });
  }

  return(
    // @ts-ignore
    <PageLayout>
      <div className={classNames("container")}>
        <section className={classNames("container-form")}>
          <div className={classNames("content")}>
            {/* @ts-ignore */}
            <BasicInformation basicFormDetail={basicForm} />
            {/* @ts-ignore */}
            <HandleInformation handleForm={handleForm}/>
            {/* @ts-ignore */}
            <div className={classNames("content-tabs")}>
              {/* @ts-ignore */}
              <Tabs
                onChange={onChange}
                type="card"
                items={fnMaps.map((item, i) => {
                  return {
                    label: item.label,
                    key: item.id,
                    children: item.value(),
                  };
                })}
              />
            </div>
          </div>
        </section>
        <section className={classNames("container-process")}>
          <CustomLayout title="流程引擎" />
          <iframe
            id="auditForm"
            className={classNames("process")}
            width="1300"
            src={`${frontendURL}/sys-lbpm/desktop/#/lbpmIntegrate/integrate/auditForm?fdProcessId=${processId}`}
          />
        </section>
      </div>
      <div className={classNames("action")}>
        {/* @ts-ignore */}
        <Button 
          type="primary" 
          className={classNames("action-submit")}
          onClick={onSubmit}
        >提交</Button>
        {/* @ts-ignore */}
        <Button className={classNames("action-btn")}>暂存</Button>
        {/* @ts-ignore */}
        <Button className={classNames("action-btn")}>保存</Button>
        {/* @ts-ignore */}
        <Button className={classNames("action-btn")}>取消</Button>
        {/* @ts-ignore */}
        <Button className={classNames("action-btn")}>重置</Button>
      </div>
    </PageLayout>
  )
}

export default ReceiveAssign