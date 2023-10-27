import React, { useEffect } from 'react'
import { NextPage } from 'next'
import PageLayout from '../../layout/PageLayout'

interface ReceiveAssignProps {
}

const ReceiveAssign: NextPage = () => {
  useEffect(() => {
    console.log("client-home")
  }, [])

  return(
    // @ts-ignore
    <PageLayout>
      <div>
        ReceiveAssign - 111
      </div>
    </PageLayout>
  )
}

export default ReceiveAssign