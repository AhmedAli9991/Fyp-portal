import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../API/auth";

const user = JSON.parse(localStorage.getItem("user"));

export const Login = createAsyncThunk(
  "auth/Login",
  async ({ userEmail, userPassword }, thunkAPI) => {
    console.log(userEmail, userPassword);
    try {
      var res = await authService.login(userEmail, userPassword);
      console.log("thunk" + res);
      return res;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue();
    }
  }
);

// export const Logout = createAsyncThunk("auth/Logout");

export const Signup = createAsyncThunk(
  "auth/Signup",
  async (data, thunkAPI) => {
    console.log(data);
    try {
      var res = await authService.signup(data);
      console.log("thunk/signup" + res);
      return res;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue();
    }
  }
);

export const addFaculty = createAsyncThunk(
  "auth/addFaculty",
  async (faculty, thunkAPI) => {
    console.log(faculty);
    try {
      var res = await authService.addFaculty(faculty);
      console.log("thunk" + res);
      return res;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue();
    }
  }
);

const initialState = user
  ? { isLoggedIn: true, user, status: "", success: true }
  : { isLoggedIn: false, user: null, status: "", success: false };

const authSlice = createSlice({
  name: "auth",
  initialState,

  extraReducers: {
    [Login.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
      state.status = action.payload.status;
    },
    [Login.rejected]: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
    [Signup.fulfilled]: (state, action) => {
      state.status = action.payload.status;
      state.success = action.payload.success;
    },
    [Signup.rejected]: (state) => {},
    [addFaculty.fulfilled]: (state, action) => {},
    [addFaculty.rejected]: (state) => {},
  },
});
export default authSlice.reducer;
