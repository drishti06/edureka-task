import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table } from "./ui/table";
import { useDispatch, useSelector } from "react-redux";
import { setColumnNames, setTableData } from "@/feature/account/accountSlice";

const Accounts = () => {
  const dispatch = useDispatch();
  const tableData = useSelector((state) => state.table.tableData);
  const columnNames = useSelector((state) => state.table.columnNames);

  useEffect(() => {
    dispatch(setTableData(tableData));
    dispatch(setColumnNames(columnNames));
  }, [dispatch]);
  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="create">Create</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Table table={tableData} columns={columnNames} />
      </TabsContent>
      <TabsContent value="create">Change your password here.</TabsContent>
    </Tabs>
  );
};

export default Accounts;
