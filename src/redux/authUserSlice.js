import { createSlice } from '@reduxjs/toolkit'

const authUserSlice = createSlice({
  name: 'authUser',
  initialState:{
    loginUser: {
      currentUser: null,
      isFetching: false,
      error: false
    }

  },
  reducers:{
    // LoginUser
    loginUserStart: (state) => {
      state.loginUser.isFetching = true
      state.loginUser.msg = null
    },
    loginUserSuccess: (state, action) => {
      state.loginUser.isFetching = false
      state.loginUser.currentUser = action.payload
      state.loginUser.error = false
      state.loginUser.msg = null
    },
    loginUserFailed: (state) => {
      state.loginUser.isFetching = false
      state.loginUser.error = true
    },
    logoutUserStart: (state) => {
      state.loginUser.isFetching = true
    },
    logoutUserSuccess: (state) => {
      state.loginUser.isFetching = false
      state.loginUser.currentUser = null
      state.loginUser.error = false
    },
    logoutUserFailed: (state) => {
      state.loginUser.isFetching = false
      state.loginUser.error = true
    }
  }
})

export const {
  loginUserFailed,
  loginUserStart,
  loginUserSuccess,
  logoutUserFailed,
  logoutUserStart,
  logoutUserSuccess
} = authUserSlice.actions

export default authUserSlice.reducer