import FormLayout from '../../components/formLayout';
import CustomLayout from '../customLayout/index';
import styles from "./index.module.scss"
import classnames from "classnames/bind";
const classNames = classnames.bind(styles);

import { useImmerReducer } from "use-immer";
import { reducer } from "../../utils/reducer";
import { useDispatch, useSelector } from "react-redux";

const initialState = {
  files: [], // 文件上传
  images: [] // 图片上传
}

const AttachmentUpload = () => {
  const dispatchRedux = useDispatch();
  const [data, dispatch] = useImmerReducer(reducer, initialState);
  const { files, images } = data as any;
  const setState = (type: string, val: Record<string, any>) => {
    dispatch({ type, payload: val });
  };
  
  const formObj = {
    name: 'upload-form',
    layout: "horizontal",
    labelAlign: "left",
    items: [
      {
        kind: 'uploadFile',
        key: 'files',
        fileList: [],
        label: (
          <span className={classNames("form-item-label-option")}>上传附件</span>
        ),
        name: 'files',
        title: "上传附件",
        onChange: (e: any) => {
          setState("update", { files: e.target.value.trim()})
        }
      },
      {
        kind: 'uploadImage',
        key: 'images',
        fileList: [],
        label: (
          <span className={classNames("form-item-label-option")}>图片上传</span>
        ),
        name: 'images',
        title: "点击或拖拽添加图片",
        tip: "注：支持上传jpg/gif/png格式，单张不超过5M",
        styleTip: {
          width: "70%",
          margin: "0 auto"
        },
        onChange: (e: any) => {
          setState("update", { images: e.target.value.trim()})
        }
      },
    ],
  }

  return (
    <>
      <CustomLayout title="附件上传" />
      <div>
        <FormLayout formObj={formObj} />
      </div>
    </>
  )
}

export default AttachmentUpload