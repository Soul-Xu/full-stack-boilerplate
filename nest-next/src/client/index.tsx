import type { NextPage } from "next"
import { selectAuthState, setAuthState } from "./store/authSlice"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { useRouter } from 'next/router'

const Home: NextPage = () => {
  const authState = useSelector(selectAuthState)
  const dispatch = useDispatch()
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push('/home')
    }, 3000)
    console.log("22222")
  }, [])

  return (
    <div>
      <div>{authState ? "Logged in" : "Not Logged In"}</div>
      <button
        onClick={() =>
          authState
            ? dispatch(setAuthState(false))
            : dispatch(setAuthState(true))
        }
      >
        {authState ? "Logout" : "LogIn"}
      </button>
    </div>
  )
}

export default Home
