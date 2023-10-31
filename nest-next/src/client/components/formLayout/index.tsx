import { useState } from 'react'
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';
import { Form, Input, Select, DatePicker, Upload, Button, Row, Col } from 'antd'
import classnames from 'classnames/bind';
import style from './index.module.scss';
import dayjs from 'dayjs'
import CustomUploadFile from '../uploadFile/index';
import CustomUploadImage from '../uploadImage/index';

const { RangePicker } = DatePicker;
const { Option } = Select;
const { TextArea } = Input
const { Dragger } = Upload;
const classNames = classnames.bind(style);

interface IPagination {
  page: number,
  pageSize: number,
  total: number
}

interface IFormObjProps {
  name: string,
  layout?: string | any,
  inRow?: boolean,
  labelAlign?: string | any,
  items: Array<any>,
  customElements?: any
}

interface IChangePageFunc {
  (page: number, pageSize: number): void
}

interface ITableObjProps {
  columns?: Array<any>,
  datasource?: any,
  api?: string,
  customElements?: any,
  pagination: IPagination,
  onChangePage: IChangePageFunc
}

interface FormLayoutProps {
  formObj: IFormObjProps,
}

const FormLayout = ({
  formObj = {
    name: '', // Form名称
    layout: 'inline',
    items: [], // FormItem类型
    customElements: (params: any) => (<></>) // 附加的dom，eg: button
  }
}: FormLayoutProps) => {
  const getFields = (items: any) => {
    const children = [];
    items.map((item: any, index: number) => {
      children.push(
        <Col span={8} key={item.key}>
           {
             (index + 1) % 3 !== 0 ? (
                <Form.Item 
                  {...item?.formItemLayout} 
                  required={item?.require} 
                  colon={false} 
                  label={item.label || ""} 
                  key={item.key} 
                  name={item.name} 
                  className={classNames("form-item")}
                  rules={item?.rules}
                >
                  { item.type === "input" && <Input {...item} /> }
                  { item.type === "select" && <Select {...item} /> }
                </Form.Item>
             ) : 
             (
              <Form.Item 
                {...item?.formItemLayout} 
                required={item?.require} 
                colon={false} 
                label={item.label || ""} 
                key={item.key} 
                name={item.name} 
                className={classNames("form-input")}
                rules={item?.rules}
              >
                { item.type === "input" && <Input {...item} /> }
                { item.type === "select" && <Select {...item} /> }
              </Form.Item>
             )
           }
        </Col>,
      );
    })
    return children;
  }

  const FormComponent = () => {
    const { items, layout, labelAlign, customElements, inRow, ...rest } = formObj
    const [form] = Form.useForm();

    if (inRow) {
      return (
        <Form
          {...rest} 
          form={form} 
          layout={layout} 
          labelAlign={labelAlign} 
          id={formObj.name} 
          name={formObj.name} 
          className={classNames("form-content")}
        >
          <Row>{getFields(items)}</Row>
        </Form>
      )
    }

    return (
      <Form 
        {...rest} 
        form={form} 
        layout={layout} 
        labelAlign={labelAlign} 
        id={formObj.name} 
        name={formObj.name} 
        className={classNames("form-content")}
      >
        {/* <Row> */}
        { items.length > 0 && items.map((item: any, index: number) => {
          if (item.type === 'input') {
            return (
              <Row>
                <Col span={24} className={item?.classname}>
                  <Form.Item 
                    {...item?.formItemLayout} 
                    required={item?.require} 
                    colon={false} 
                    label={item.label || ""} 
                    key={item.key} 
                    name={item.name} 
                    className={classNames(item?.useItemStyle ? "form-label" : "")}
                    rules={item?.rules}
                  >
                    { item?.subType !== "area" && (
                      <input
                        style={item.style}
                        value={item.value}
                        onChange={(e) => item.callback(e)}
                        placeholder={item.placeholder}
                        placeholder-class="placeholder-class"
                        type={item?.subType }
                      />
                    )}
                    { item?.subType === "area" && (
                      <TextArea 
                        showCount 
                        maxLength={100} 
                        style={item.style}
                        value={item.value}
                        placeholder={item.placeholder}
                        placeholder-class="placeholder-class"
                        onChange={(e) => item.callback(e)} 
                      />
                    )}
                  </Form.Item>
                </Col>
              </Row>
            )
          }
          if (item.type === 'select') {
            return (
              <Row>
                <Col span={24}>
                  <Form.Item 
                    {...item?.formItemLayout} 
                    colon={false} 
                    label={item.label || "" } 
                    key={item.key} 
                    name={item.name} 
                    className={classNames("form-item")}>
                    <Select
                      defaultValue={item.defaultValue}
                      onChange={(data: any) => item.callback(data)}
                      placeholder={item.placeholder}
                      getPopupContainer={(triggerNode) => triggerNode.parentNode}
                      // suffixIcon={<img src={require("@/assets/images/common/down.png")} />}
                      options={item.options}
                    />
                    {item?.customElement}
                  </Form.Item>
                </Col>
              </Row>
            )
          }
          if (item.type === 'datepicker') {
            return (
              <Row>
                <Col span={24}>
                  <Form.Item 
                    {...item?.formItemLayout} 
                    colon={false} 
                    label={item.label || ""} key={item.key} name={item.name} className={classNames("form-item")}>
                    <RangePicker
                      defaultValue={[dayjs(), dayjs()]}
                      allowClear={false}
                      onChange={(time: any) => {
                        item.callback(time)
                      }}
                      getPopupContainer={(triggerNode) => triggerNode}
                    />
                  </Form.Item>
                </Col>
              </Row>
            )
          }
          if (item.type === 'uploadFile') {
            return (
              <Form.Item 
                // {...item?.formItemLayout} 
                colon={false} 
                label={item.label || ""} key={item.key} name={item.name} className={classNames("form-item")}>
                {/* @ts-ignore */}
                <Upload>
                  {/* @ts-ignore */}
                  <Button icon={<UploadOutlined />}>{item.title}</Button>
                </Upload>
              </Form.Item>
            )
          }
          if (item.type === 'uploadImage') {
            return (
              <Form.Item 
                {...item?.formItemLayout} 
                colon={false} 
                label={item.label || ""} key={item.key} name={item.name} className={classNames("form-item")}>
                <Dragger>
                  <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                  </p>
                  <p className="ant-upload-hint">{item.title}</p>
                  <p className="ant-upload-hint" style={item.styleTip}>{item.tip}</p>
                </Dragger>
              </Form.Item>
            )
          }
          return null
        }) }
        {/* </Row> */}
        <div>
          { typeof customElements === 'function' && (
            <>{customElements()}</>
          ) }
        </div>
      </Form>
    )
  }

  return (
    <div>
      <div className={classNames("basic-wrap")}>
        <div className={classNames("form-wrap")}>
          {FormComponent()}
        </div>
      </div>
    </div>
  )
}

export default FormLayout
