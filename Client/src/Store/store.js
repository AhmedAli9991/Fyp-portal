import { configureStore } from "@reduxjs/toolkit";
import userRoleReducer from "./roles";
import authReducer from "./authSlice";
import synopsisReducer from "./synopsis";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    userRoles: userRoleReducer,
    synopsis: synopsisReducer,
  },
});
