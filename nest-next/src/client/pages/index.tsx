import type { NextPage } from "next"
import { useEffect } from "react"
import { useRouter } from 'next/router'
import { authState, setAuthState } from "../store/modules/authSlice"
import { useDispatch, useSelector } from "react-redux";

const Index: NextPage = () => {
  const dispatchRedux = useDispatch();
  const authState = useSelector((state: any) => state.auth.authState)
  const router = useRouter()

  useEffect(() => {
    if (!authState) {
      router.push("/login")
    } else {
      router.push('/home')
    }
  }, [])

  return (
    <div>
      index
    </div>
  )
}

export default Index