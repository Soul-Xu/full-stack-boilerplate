import React, { useEffect } from 'react'
import { NextPage } from 'next'
import PageLayout from '../../layout/PageLayout'

interface ReportCoordinationProps {
}

const ReportCoordination: NextPage = () => {
  useEffect(() => {
    console.log("client-home")
  }, [])

  return(
    // @ts-ignore
    <PageLayout>
      <div>
        ReportCoordination - 111
      </div>
    </PageLayout>
  )
}

export default ReportCoordination