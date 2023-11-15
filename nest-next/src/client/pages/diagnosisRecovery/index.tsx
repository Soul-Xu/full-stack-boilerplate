import React, { useEffect } from 'react'
import { useRouter } from 'next/router';
import { NextPage } from 'next'
import styles from "./index.module.scss";
import classnames from "classnames/bind";
const classNames = classnames.bind(styles);
import debounce from 'lodash/debounce';
import { Tabs, message, Button, Modal } from 'antd'
const { confirm } = Modal;
const { TabPane } = Tabs;

import { useImmerReducer } from "use-immer"
import { reducer } from "../../utils/reducer"
import { useDispatch, useSelector } from "react-redux"
import { setBasicInfo } from '../../store/modules/basicInfoSlice'
import { setRecovery } from '../../store/modules/recoverySlice'
import dayjs from "dayjs"

/** component */
import PageLayout from '../../layout/PageLayout'
import BasicInformation from '../../funcComponents/basicInformation/index';
import HandleInformation from '../../funcComponents/handleInformation/index';
import ReasonAnalysis from '../../funcComponents/reasonAnalysis/index';
import RecoveryProcess from '../../funcComponents/recoveryProcess/index';
import AttachmentUpload from '../../funcComponents/attachmentUpload/index';
import ProcessLayout from '../../funcComponents/processLayout';
import ProcessIframe from "../../funcComponents/processIframe"
import CustomLayout from "../../funcComponents/customLayout/index"

interface DiagnosisRecoveryProps {
}

const initialState = {
  fdNo: "", // 事件编号
  fdAuthor: "", // 登记人
  fdInputTime: "", // 登记时间
  fdFindWay: "", // 发现渠道
  fdReportor: "", // 报告人
  fdFollowTeam: "", // 主要跟进团队
  fdFollowUser: "", // 可用性跟进人 
  fdAssistTeam: "", // 协助跟进团队
}

const frontendURL = "https://yunsucoding.landray.com.cn/web"
const processId = "1hbcove6fw3mwqa6w268kv4hofm0l21b88w2"

const DiagnosisRecovery: NextPage = () => {
  const router = useRouter()
  const dispatchRedux = useDispatch();
  const basicInfo: any = useSelector((state: any) => state.basic.basicInfo)
  const handleInfo: any = useSelector((state: any) => state.handle.handleInfo)
  const recovery: any = useSelector((state: any) => state.recovery.recovery)
  const [data, dispatch] = useImmerReducer(reducer, initialState);
  const { 
    fdNo, fdAuthor, fdInputTime, fdFindWay, fdReportor,
    fdFollowTeam, fdFollowUser, fdAssistTeam,
  } = data as any;
  const setState = (type: string, val: Record<string, any>) => {
    dispatch({ type, payload: val });
  };

  const fnMaps = [
    {
      id: "reasonAnalysis",
      label: "原因分析",
      value: () => {
        return (
          <>
            {/* @ts-ignore */}
            <ReasonAnalysis />
          </>
        )
      }
    },
    {
      id: "recoveryProcess",
      label: "恢复过程",
      value: () => {
        return (
          <>
            {/* @ts-ignore */}
            <RecoveryProcess form4={recoveryForm3} showForm5={false} />
          </>
        )
      }
    },
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
    {
      id: "auditNotes",
      label: "流程审批意见",
      value: () => {
        return (
          <>
          {/* @ts-ignore */}
          <ProcessIframe type="auditNotes" processId={processId} />
          </>
        )
      }
    },
    {
      id: "processStatus",
      label: "流程状态",
      value: () => {
        return (
          <>
            {/* @ts-ignore */}
            <ProcessIframe type="processStatus" processId={processId} />
          </>
        )
      }
    },
    {
      id: "auditChart",
      label: "流程图",
      value: () => {
        return (
          <>
            {/* @ts-ignore */}
            <ProcessIframe type="auditChart" processId={processId} />
          </>
        )
      }
    },
    {
      id: "auditLogs",
      label: "流程操作日志",
      value: () => {
        return (
          <>
            {/* @ts-ignore */}
            <ProcessIframe type="auditLogs" processId={processId} />
          </>
        )
      }
    },
  ]

  const onChange = (key: string) => {
    console.log(key);
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
  
    const updatedRecovery = { ...recovery, [key]: newValue };
    dispatchRedux(setRecovery(updatedRecovery));
  }, 1000);

  const basicForm = {
    name: 'diagnosis-basic-form',
    inRow: 3,
    layout: "horizontal",
    labelAlign: "right",
    items: [
      {
        kind: 'input',
        type: "text",
        key: 'fdNo',
        value: fdNo,
        defaultValue: "SJ-2023092800001",
        label: (
          <span className={classNames("form-item-label-option")}>事件编号</span>
        ),
        name: 'fdNo',
        disabled: true,
        placeholder: '自动生成',
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
        disabled: true,
        placeholder: '自动获取',
        onChange: (e: any) => {
          onHandleBasic("fdAuthor", e.target.value.trim())
        }
      },
      {
        kind: 'input',
        type: "text",
        key: 'fdInputTime',
        value: fdInputTime,
        defaultValue: "2023-11-07 08:07:54",
        label: (
          <span className={classNames("form-item-label-option")}>登记时间</span>
        ),
        name: 'fdInputTime',
        disabled: true,
        placeholder: '自动获取',
        onChange: (e: any) => {
          onHandleBasic("fdInputTime", e.target.value.trim())
        }
      },
      {
        kind: 'select',
        key: 'fdFindWay',
        value: fdFindWay,
        defaultValue: "告警日志",
        label: (
          // <span className={classNames("form-item-label")}>发现渠道</span>
          <span className={classNames("form-item-label-option")}>
            <span className={classNames("form-item-require")}>*</span>
            发现渠道
          </span>
        ),
        name: 'fdFindWay',
        disabled: true,
        // require: 1,
        placeholder: '请输入发现渠道',
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
        disabled: true,
        placeholder: '请输入报告人',
        onChange: (value: any) => {
          onHandleBasic("fdReportor", value)
        }
      }
    ],
  }

  const recoveryForm3 = {
    name: 'diagnosis-recovery-three',
    inRow: 3,
    layout: "horizontal",
    labelAlign: "right",
    items: [
      {
        kind: 'select',
        key: 'fdFollowTeam',
        value: fdFollowTeam,
        label: (
          <span className={classNames("form-item-label-option")}>主要跟进团队</span>
        ),
        name: 'fdFollowTeam',
        onChange: (value: any) => {
          onHandleChange("fdFollowTeam", value)
        }
      },
      {
        kind: 'select',
        key: 'fdFollowUser',
        value: fdFollowUser,
        label: (
          <span className={classNames("form-item-label-option")}>可用性跟进人</span>
        ),
        name: 'fdFollowUser',
        onChange: (value: any) => {
          onHandleChange("fdFollowUser", value)
        }
      },
      {
        kind: 'select',
        key: 'fdAssistTeam',
        value: fdAssistTeam,
        label: (
          <span className={classNames("form-item-label")}>协助跟进团队</span>
        ),
        name: 'fdAssistTeam',
        onChange: (value: any) => {
          onHandleChange("fdAssistTeam", value)
        }
      },
    ],
  }

  // 点击提交按钮表单校验逻辑
  const onSubmit = () => {
    const { fdSubject, fdDesc, fdFindWay, fdReportTime } = basicInfo
    const { fdProcessDept, fdProcessUser, fdFindTime } = handleInfo
  
    // // 表单必填项验证
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
    //   message.warning("处理人不能为空")
    //   return
    // }
    // if (!fdFindTime) {
    //   message.warning("发现时间不能为空")
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
        router.push("/review")
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
            <HandleInformation />
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

export default DiagnosisRecovery