import { memo, ReactNode, useEffect, useState } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { message, Modal, Upload } from "antd";
import { UploadChangeParam } from "antd/lib/upload";
import { UploadFile, UploadProps } from "antd/lib/upload/interface";
import ImgCrop, { ImgCropProps } from "antd-img-crop";
import classnames from "classnames";
import produce from "immer";
import { last } from "ramda";

import "./index.scss";
import defaultImg from "@/assets/images/common/default-img.png";

// eslint-disable-next-line @typescript-eslint/ban-types
const getBase64 = (img: Blob, callback?: Function) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    return callback && callback(reader.result);
  });
  reader.readAsDataURL(img);
};

const beforeUpload = (file: Blob) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";

  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }

  const isLt2M = file.size / 1024 / 1024 < 2;

  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }

  return isJpgOrPng && isLt2M;
};

export interface UploadImgProps extends Partial<Omit<UploadProps, "onChange">> {
  cropProps?: Partial<ImgCropProps>; // 详见 https://ant.design/components/upload-cn/#API
  hideNumber?: number; // 上传几张图片后隐藏上传按钮
  defaultRender?: ReactNode;
  onChange?: (fileList: UploadFile<any>[]) => void;
  loadingClassNames?: string;
  value?: UploadFile[]; // 外部传入fileList，写成value是因为antd formItem需要实现value才能回填数据
  uploadWrapClassNames?: string;
}

/**
 * 表示是否显示预览列表
 * 注意如果maxCount不等于1的话showUploadList需要等于true，否则无法预览
 * showUploadList
 *
 * 最多上传张数
 * maxCount
 */

const UploadImage = ({
  cropProps,
  showUploadList = false,
  maxCount = 1,
  listType = "picture-card",
  className,
  defaultRender,
  onChange,
  loadingClassNames,
  value,
  fileList: filelist,
  uploadWrapClassNames,
  ...rest
}: UploadImgProps) => {
  const [fileList, setFileList] = useState<UploadFile[]>(filelist || value || []);
  const [loading, setLoading] = useState(false);
  const [previewImage, setPreviewImage] = useState<any>();
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewTitle, setPreviewTitle] = useState("");
  const [isOneErr, setOneErr] = useState(false);

  // 主要是为了兼容formitem
  useEffect(() => {
    if (value) setFileList(value);
  }, [value]);

  useEffect(() => {
    if (filelist) setFileList(filelist);
  }, [filelist]);

  const handleChange = (info: UploadChangeParam<UploadFile>) => {
    const list = produce(info.fileList, (draft: Record<string, any>[]) => {
      const data = last(draft)?.response?.data;
      if (data) {
        draft[draft.length - 1].url = `${data?.baseUrl}${data?.filename[0]}`;
      }
    });
    onChange && onChange(list);

    if (info.file.status === "uploading") {
      if (isOneErr) {
        setOneErr(false);
      }
      if (!loading) {
        setLoading(true);
      }
    } else if (info.file.status === "error") {
      setOneErr(true);
      setLoading(false);
    } else {
      setLoading(false);
    }

    setFileList(list);
  };

  const handlePreview = (file: UploadFile, url: string) => {
    setPreviewImage(url);
    setPreviewVisible(true);
    setPreviewTitle(file?.name || "预览");
  };

  const onPreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      getBase64(file.originFileObj as Blob, function (url: string) {
        handlePreview(file, url);
      });
      return;
    }

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    handlePreview(file, (file.url || file.preview)!);
  };

  const uploadButton = (
    <div>
      {loading ? (
        <LoadingOutlined className={classnames("loading", loadingClassNames)} />
      ) : isOneErr ? (
        "上传失败"
      ) : showUploadList === false && fileList?.length && maxCount === 1 ? (
        <img src={last(fileList)?.url} className={classnames("one-img")} />
      ) : (
        defaultRender || <img src={defaultImg} className={classnames("default-img")} />
      )}
    </div>
  );

  const onCancel = () => setPreviewVisible(false);

  return (
    <div className={classnames("comp-upload-wrap", uploadWrapClassNames)}>
      <ImgCrop
        aspect={1 / 1} // 裁剪比例:  width / height
        quality={0.5} // 画面质量
        grid // 显示裁剪区域的网格
        rotate // 启用图像旋转
        {...cropProps}
      >
        <Upload
          action={`${process.env.REACT_APP_UPLOAD}/file/upload`}
          progress={{
            strokeColor: {
              "0%": "#108ee9",
              "100%": "#87d068"
            },
            strokeWidth: 3,
            format: (percent) => percent && `${parseFloat(percent.toFixed(2))}%`
          }}
          {...rest}
          fileList={fileList}
          listType={listType}
          showUploadList={showUploadList}
          maxCount={maxCount}
          className={className}
          onPreview={onPreview}
          // beforeUpload={beforeUpload}
          onChange={handleChange}
        >
          {uploadButton}
        </Upload>
      </ImgCrop>
      <Modal visible={previewVisible} title={previewTitle} footer={null} onCancel={onCancel} getContainer={false}>
        <img
          alt="example"
          style={{
            width: "100%"
          }}
          src={previewImage}
        />
      </Modal>
    </div>
  );
};

export default memo(UploadImage);
