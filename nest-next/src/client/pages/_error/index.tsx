// 仅用于生产。在开发中，您将在调用堆栈中收到错误，以了解错误的来源。
import { useEffect } from "react";
import classnames from 'classnames/bind'
// import { useTranslation } from "react-i18next";
// import Logan from "logan-web";
// import SubmitBug from "components/SubmitBug";
import styles from './index.module.scss'

const classNames = classnames.bind(styles)

function Error(props: any) {
  const { res, err } = props
  // const { t } = useTranslation()
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;

  useEffect(() => {
    console.log('error props: ', props)
    // Logan.log(props, 1)
  }, [])

  return (
    <div className={classNames('page-error')}>
      {/* <SubmitBug message={
        statusCode
          ? t('error.errorPageServer', {statusCode})
          : t('error.errorPageClient')
      } /> */}
      1111-error
    </div>

  );
}

Error.getInitialProps = async ({...rest}: any) => {
  console.log("error01111111", rest)
  return rest
};

export default Error;
