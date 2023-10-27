import React, { useEffect } from 'react'
import { NextPage } from 'next'
import PageLayout from '../../layout/PageLayout'

interface DepartmentCounterSignProps {
}

const DepartmentCounterSign: NextPage = () => {
  useEffect(() => {
    console.log("client-home")
  }, [])

  return(
    // @ts-ignore
    <PageLayout>
      <div>
        DepartmentCounterSign - 111
      </div>
    </PageLayout>
  )
}

export default DepartmentCounterSign