import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState:{
    login:{
      currentUser: null,
      isFetching: false,
      error: false
    },
    register:{
      isFetching: false,
      error: false,
      success: false
    },
    // loginUser: {
    //   currentUser: null,
    //   isFetching: false,
    //   error: false,
    //   msg: null
    // }

  },
  reducers:{
  // LoginAdmin
    loginStart: (state) => {
      state.login.isFetching = true
      state.login.msg = null
    },
    loginSuccess: (state, action) => {
      state.login.isFetching = false
      state.login.currentUser = action.payload
      state.login.error = false
      state.login.msg = null
    },
    loginFailed: (state) => {
      state.login.isFetching = false
      state.login.error = true
    },
    // Tao tai khoan
    registerStart: (state) => {
      state.register.isFetching = true
    },
    registerSuccess: (state) => {
      state.register.isFetching = false
      state.register.error = false
      state.register.success = true
    },
    registerFailed: (state) => {
      state.register.isFetching = false
      state.register.error = true
      state.register.success = false
    },
    // Dang xuat Admin
    logoutStart: (state) => {
      state.login.isFetching = true
    },
    logoutSuccess: (state) => {
      state.login.isFetching = false
      state.login.currentUser = null
      state.login.error = false
    },
    logoutFailed: (state) => {
      state.login.isFetching = false
      state.login.error = true
    },

  }
})

export const {
  loginStart,
  loginSuccess,
  loginFailed,
  registerStart,
  registerFailed,
  registerSuccess,
  logoutFailed,
  logoutStart,
  logoutSuccess,
  // loginUserFailed,
  // loginUserStart,
  // loginUserSuccess,
  // logoutUserFailed,
  // logoutUserStart,
  // logoutUserSuccess
} = authSlice.actions

export default authSlice.reducer