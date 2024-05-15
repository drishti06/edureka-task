import { createSlice } from "@reduxjs/toolkit";
import accountData from "../../data.json";

const initialState = {
  tableData: accountData.data,
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setTableData(state, action) {
      state.tableData = action.payload;
    },
    setColumnNames(state, action) {
      state.columnNames = action.payload;
    },
  },
});

export const { setTableData, setColumnNames } = accountSlice.actions;
export default accountSlice.reducer;
