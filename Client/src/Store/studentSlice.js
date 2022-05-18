/* import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../API/auth";

export const submitSynopsis = createAsyncThunk(
  "student/submitSynopsis",
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

export const submitThesis = createAsyncThunk(
  "auth/Signup",
  async (
    {
      registrationNo,
      username,
      fatherName,
      mobile,
      email,
      program,
      userRole,
      password,
    },
    thunkAPI
  ) => {
    console.log(
      registrationNo,
      username,
      fatherName,
      mobile,
      email,
      userRole,
      program,
      password
    );
    try {
      var res = await authService.signup(
        registrationNo,
        username,
        fatherName,
        mobile,
        email,
        program,
        userRole,
        password
      );
      console.log("thunk" + res);
      return res;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue();
    }
  }
);

const initialState = user
  ? { isLoggedIn: true, user, status: "" }
  : { isLoggedIn: false, user: null, status: "" };

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
    },
    [Signup.rejected]: (state) => {},
  },
});
export default authSlice.reducer;
 */
