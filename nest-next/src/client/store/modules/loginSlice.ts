import { createSlice } from "@reduxjs/toolkit"
import { AppState } from "../store"
import { HYDRATE } from "next-redux-wrapper"

export interface UserState {
  username: string,
  password: string
}

// Type for our state
export interface LoginState {
  userInfo: UserState | any
}

// Initial state
const initialState: LoginState = {
  userInfo: {
    username: "",
    password: ""
  }
}

// Actual Slice
export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    // Action to set the authentication status
    setUserInfo(state, action) {
      state.userInfo = action.payload
    },

    // Special reducer for hydrating the state. Special case for next-redux-wrapper
    // extraReducers: {
    //   [HYDRATE]: (state, action) => {
    //     return {
    //       ...state,
    //       ...action.payload.auth,
    //     }
    //   },
    // },
  }
})

export const { setUserInfo } = loginSlice.actions

export const userInfo = (state: AppState) => state.login.userInfo

export default loginSlice.reducer
