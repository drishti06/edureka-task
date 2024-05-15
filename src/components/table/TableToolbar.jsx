import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Cross2Icon } from "@radix-ui/react-icons";
import DataTableFacetedFilter from "./DataTableFacetedFilter";
import DataTableViewOptions from "./DataTableViewOptions";

const TableToolbar = ({ table, columnName = "account_name" }) => {
  const isFiltered = table.getState().columnFilters.length > 0;
  return (
    <div className="flex justify-between">
      <div className="flex flex-col">
        <span className="text-2xl font-medium">Account Lists</span>
        <span>Here's a list of your accounts.</span>
      </div>
      <div className="flex flex-row-reverse gap-5 justify-end">
        <div>
          <Input
            placeholder="Search here ..."
            value={table.getColumn(`${columnName}`)?.getFilterValue() ?? ""}
            onChange={(event) =>
              table
                .getColumn(`${columnName}`)
                ?.setFilterValue(event.target.value)
            }
            className="h-8 py-5 rounded-lg w-[150px] lg:w-[250px]"
          />
          {isFiltered && (
            <Button
              variant="ghost"
              onClick={() => table.resetColumnFilters()}
              className="h-8 px-2 lg:px-3 border"
            >
              Reset
              <Cross2Icon className="ml-2 h-4 w-4" />
            </Button>
          )}
        </div>
        <div>
          <DataTableViewOptions table={table} />
        </div>
      </div>
    </div>
  );
};

export default TableToolbar;
