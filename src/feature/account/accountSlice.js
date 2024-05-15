// src/redux/accountsSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import accountData from "../../data.json";

export const fetchAccountsData = createAsyncThunk(
  "accounts/fetchAccountsData",
  async () => {
    return accountData.accountData;
  }
);

const accountsSlice = createSlice({
  name: "accounts",
  initialState: {
    tableData: [],
    columnNames: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAccountsData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAccountsData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.tableData = action.payload;
        if (action.payload.length > 0) {
          const formKeys = Object.keys(action.payload[0]);
          const newColumns = formKeys.map((key) => ({
            header: key.charAt(0).toUpperCase() + key.slice(1),
            accessorKey: key.toLowerCase(),
          }));
          state.columnNames = newColumns;
        } else {
          state.columnNames = [];
        }
      })
      .addCase(fetchAccountsData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default accountsSlice.reducer;
