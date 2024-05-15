import React from "react";
import { Routes, Route } from "react-router-dom";
import Accounts from "./Accounts";
import Form from "./Form";
import { ScrollArea } from "./ui/scroll-area";

const List = () => {
  return (
    <>
      <ScrollArea orientaion="both" className="p-3 bg-gray-50 h-[90dvh]">
        <Routes>
          <Route path="/account" element={<Accounts />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </ScrollArea>
    </>
  );
};

export default List;
