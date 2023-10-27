import React, { useEffect } from 'react'
import { NextPage } from 'next'
import PageLayout from '../../layout/PageLayout'

interface EventReportAuditProps {
}

const EventReportAudit: NextPage = () => {
  useEffect(() => {
    console.log("client-home")
  }, [])

  return(
    // @ts-ignore
    <PageLayout>
      <div>
        EventReportAudit - 111
      </div>
    </PageLayout>
  )
}

export default EventReportAudit