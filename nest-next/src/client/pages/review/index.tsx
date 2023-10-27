import React, { useEffect } from 'react'
import { NextPage } from 'next'
import PageLayout from '../../layout/PageLayout'

interface ReviewProps {
}

const Review: NextPage = () => {
  useEffect(() => {
    console.log("client-home")
  }, [])

  return(
    // @ts-ignore
    <PageLayout>
      <div>
        Review - 111
      </div>
    </PageLayout>
  )
}

export default Review