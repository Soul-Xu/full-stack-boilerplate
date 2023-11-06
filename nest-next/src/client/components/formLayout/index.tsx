import React, { useState } from 'react'
// import locale from 'antd/es/date-picker/locale/zh_CN';
// import 'dayjs/locale/zh-cn';
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';
import { Form, Input, Select, DatePicker, Upload, Checkbox, Button, Row, Col, Space } from 'antd'
import type { DatePickerProps } from 'antd';
import classnames from 'classnames/bind';
import style from './index.module.scss';
import dayjs from 'dayjs'

const { RangePicker } = DatePicker;
const { Option } = Select;
const { TextArea } = Input
const { Dragger } = Upload;
const classNames = classnames.bind(style);

interface IFormObjProps {
  name: string,
  layout?: string | any,
  inRow?: boolean,
  labelAlign?: string | any,
  items: Array<any>,
  customElements?: any
}

interface FormLayoutProps {
  formObj: IFormObjProps,
}

const FormLayout = ({
  formObj = {
    name: '', // Form名称
    layout: 'inline', // Form布局
    items: [], // FormItem类型
    customElements: (params: any) => (<></>) // 附加的dom，eg: button
  }
}: FormLayoutProps) => {
  const getFields = (items: any) => {
    const children = [];
    items.map((item: any, index: number) => {
      children.push(
        <Col 
          span={8} 
          key={item.key} 
          style={(index) % 3 === 0 ? { 
            paddingLeft: "0", paddingRight: "8px"
          }: { 
            paddingLeft: "8px", paddingRight: "8px"
          }}>
           <Form.Item 
              required={item?.require} 
              label={item.label} 
              key={item.key} 
              name={item.name}
              rules={item?.rules}
            >
              { item.kind === "input" && <Input {...item} /> }
              { item.kind === "select" && <Select {...item} /> }
              { item.kind === "checkout" && 
                <span>
                  <Checkbox {...item} />
                  <span style={{marginLeft: "8px"}}>{item.name}</span>
                </span>
              }
              { item.kind === "datepicker" && 
                <Space direction="vertical">
                  <RangePicker 
                    {...item}
                    showTime
                    format={"YYYY-MM-DD"}
                    placement={"bottomLeft"}
                  />
                </Space>
              }
            </Form.Item>
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
          labelAlign={labelAlign} 
          id={formObj.name} 
          name={formObj.name} 
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
      >
        {/* <Row> */}
        { items.length > 0 && items.map((item: any, index: number) => {
          if (item.kind === 'input') {
            return (
              <Row>
                <Col span={24} className={item?.classname}>
                  <Form.Item 
                    required={item?.require} 
                    label={item.label} 
                    key={item.key} 
                    name={item.name} 
                    rules={item?.rules}
                  >
                    { item?.type !== "area" && (
                      <Input {...item}/>
                    )}
                    { item?.type === "area" && (
                      <TextArea {...item}/>
                    )}
                  </Form.Item>
                </Col>
              </Row>
            )
          }
          if (item.kind === 'select') {
            return (
              <Row>
                <Col span={24}>
                  <Form.Item 
                    required={item?.require} 
                    label={item.label} 
                    key={item.key} 
                    name={item.name} 
                  >
                    <Select />
                    {item?.customElement}
                  </Form.Item>
                </Col>
              </Row>
            )
          }
          if (item.kind === 'datepicker') {
            return (
              <Row>
                <Col span={24}>
                  <Form.Item 
                    label={item.label} 
                    key={item.key} 
                    name={item.name} 
                  >
                    <RangePicker
                      {...item}
                      defaultValue={[dayjs(), dayjs()]}
                      allowClear={false}
                      onChange={(time: any) => {
                        item.onChange(time)
                      }}
                      getPopupContainer={(triggerNode) => triggerNode}
                    />
                  </Form.Item>
                </Col>
              </Row>
            )
          }
          if (item.kind === 'uploadFile') {
            return (
              <Form.Item 
                required={item?.require} 
                label={item.label} 
                key={item.key} 
                name={item.name} 
              >
                {/* @ts-ignore */}
                <Upload {...item}>
                  {/* @ts-ignore */}
                  <Button icon={<UploadOutlined />}>{item.title}</Button>
                </Upload>
              </Form.Item>
            )
          }
          if (item.kind === 'uploadImage') {
            return (
              <Form.Item 
                required={item?.require} 
                label={item.label} 
                key={item.key} 
                name={item.name} 
              >
                <Dragger>
                  <p className="ant-upload-drag-icon">
                    {/* @ts-ignore */}
                    <InboxOutlined />
                  </p>
                  <p className="ant-upload-hint">{item.title}</p>
                  <p className="ant-upload-hint" style={item.styleTip}>{item.tip}</p>
                </Dragger>
              </Form.Item>
            )
          }
          if (item.kind === 'action') {
            return (
              <Form.Item 
                required={item?.require} 
                label={item.label || ""} key={item.key} name={item.name}>
                { item.customElement }
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
      {FormComponent()}
    </div>
  )
}

export default FormLayout
