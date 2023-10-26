import { Form, Input, Select, DatePicker, Table, Pagination } from 'antd'
import classnames from 'classnames/bind';
import style from './index.module.scss';
import dayjs from 'dayjs'

const { RangePicker } = DatePicker;
const classNames = classnames.bind(style);

interface IPagination {
  page: number,
  pageSize: number,
  total: number
}

interface IFormObjProps {
  name: string,
  layout?: string | any,
  labelAlign?: string | any,
  items: Array<any>,
  customElements: any
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
  const FormComponent = () => {
    const { items, layout, labelAlign, customElements, ...rest } = formObj
    const [form] = Form.useForm();

    return (
      <Form {...rest} form={form} layout={layout} labelAlign={labelAlign} id={formObj.name} name={formObj.name} className={classNames("form-content")}>
        { items.length > 0 && items.map((item: any, index: number) => {
          if (item.type === 'input') {
            return (
              <Form.Item {...item?.formItemLayout} required={item?.require} colon={false} label={item.label || ""} key={item.key} name={item.name} className={classNames("header-input-wrap")}>
                <input
                  value={item.value}
                  onChange={(e) => item.callback(e)}
                  placeholder={item.placeholder}
                  placeholder-class="placeholder-class"
                  type="text"
                />
              </Form.Item>
            )
          }
          if (item.type === 'select') {
            return (
              <Form.Item {...item?.formItemLayout} colon={false} label={item.label || "" } key={item.key} name={item.name} className={classNames("form-item")}>
                <Select
                  defaultValue={item.defaultValue}
                  onChange={(data: any) => item.callback(data)}
                  placeholder={item.placeholder}
                  getPopupContainer={(triggerNode) => triggerNode.parentNode}
                  // suffixIcon={<img src={require("@/assets/images/common/down.png")} />}
                  options={item.options}
                />
              </Form.Item>
            )
          }
          if (item.type === 'datepicker') {
            return (
              <Form.Item {...item?.formItemLayout} colon={false} label={item.label || ""} key={item.key} name={item.name} className={classNames("form-item")}>
                <RangePicker
                  defaultValue={[dayjs(), dayjs()]}
                  allowClear={false}
                  onChange={(time: any) => {
                    item.callback(time)
                  }}
                  getPopupContainer={(triggerNode) => triggerNode}
                />
              </Form.Item>
            )
          }
          return null
        }) }
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
