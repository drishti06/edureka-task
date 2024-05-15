import accountsReducer from "@/feature/account/accountSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    accounts: accountsReducer,
  },
});
