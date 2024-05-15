import React, { useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useDispatch, useSelector } from "react-redux";
import { fetchAccountsData } from "@/feature/account/accountSlice";
import Tablee from "./table/Table";
const Accounts = () => {
  const dispatch = useDispatch();
  const { tableData, columnNames, status, error } = useSelector(
    (state) => state.accounts
  );
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchAccountsData());
    }
  }, [status, dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <Tabs defaultValue="account" className="w-full">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="create">Create</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Tablee data={tableData} columns={columnNames} />
      </TabsContent>
      <TabsContent value="create">
        here will be create form for adding data in account list
      </TabsContent>
    </Tabs>
  );
};

export default Accounts;
