import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import applicationReducer from "./applicationSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    application: applicationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
