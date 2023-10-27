import React, { useEffect } from 'react'
import { NextPage } from 'next'
import PageLayout from '../../layout/PageLayout'

interface SecondLevelAuditProps {
}

const SecondLevelAudit: NextPage = () => {
  useEffect(() => {
    console.log("client-home")
  }, [])

  return(
    // @ts-ignore
    <PageLayout>
      <div>
        SecondLevelAudit - 111
      </div>
    </PageLayout>
  )
}

export default SecondLevelAudit