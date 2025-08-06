import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice.js";
const store = configureStore({
  auth: authSlice,
});

export default store;
