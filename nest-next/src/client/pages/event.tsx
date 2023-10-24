// /* eslint-disable prettier/prettier */
import React, { useEffect } from 'react'
import { NextPage } from 'next'
import {getRequest} from '../http/axios'
import axiosInstance from '../http/axiosInstance'
import PageLayout from '../layout/PageLayout'

interface HomeProps {
  counted: any,
  increment: any,
  decrement: any
}

const Home: NextPage = () => {
  useEffect(() => {
    console.log("client-home")
  }, [])

  return(
    // @ts-ignore
    <PageLayout>
      <div>
        event - 222
      </div>
    </PageLayout>
  )
}

export default Home