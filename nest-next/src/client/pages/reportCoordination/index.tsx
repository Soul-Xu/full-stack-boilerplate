import React, { useEffect } from 'react'
import { useRouter } from 'next/router';
import { NextPage } from 'next'
import { useDispatch, useSelector } from "react-redux"
import PageLayout from '../../layout/PageLayout'
import styles from "./index.module.scss";
import classnames from "classnames/bind";
const classNames = classnames.bind(styles);
import { Tabs, message, Button, Modal } from 'antd'
const { confirm } = Modal;
const { TabPane } = Tabs;

/** components */
import BasicInformation from '../../funcComponents/basicInformation/index';
import HandleInformation from '../../funcComponents/handleInformation/index';
import ReasonAnalysis from '../../funcComponents/reasonAnalysis/index';
import RecoveryProcess from '../../funcComponents/recoveryProcess/index';
import EffectAnalysis from '../../funcComponents/effectAnalysis/index';
import AttachmentUpload from '../../funcComponents/attachmentUpload/index';
import ProcessIframe from "../../funcComponents/processIframe"
import CustomLayout from "../../funcComponents/customLayout/index"

interface ReportCoordinationProps {
}

const frontendURL = "https://yunsucoding.landray.com.cn/web"
const processId = "1hbcove6fw3mwqa6w268kv4hofm0l21b88w2"

const ReportCoordination: NextPage = () => {
  const router = useRouter()
  const dispatchRedux = useDispatch();
  const basicInfo: any = useSelector((state: any) => state.basic.basicInfo)
  const handleInfo: any = useSelector((state: any) => state.handle.handleInfo)

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
            <RecoveryProcess />
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

  // 点击提交按钮表单校验逻辑
  const onSubmit = () => {
    const { fdSubject, fdDesc, fdFindWay } = basicInfo
    const { fdProcessDept, fdProcessUser, fdFindTime } = handleInfo
  
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
        router.push("/statement")
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
            <BasicInformation />
            {/* @ts-ignore */}
            <HandleInformation />
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

export default ReportCoordination