import React, { useEffect } from 'react'
import { NextPage } from 'next'
import PageLayout from '../../layout/PageLayout'

interface DiagnosisRecoveryProps {
}

const DiagnosisRecovery: NextPage = () => {
  useEffect(() => {
    console.log("client-home")
  }, [])

  return(
    // @ts-ignore
    <PageLayout>
      <div>
        DiagnosisRecovery - 111
      </div>
    </PageLayout>
  )
}

export default DiagnosisRecovery