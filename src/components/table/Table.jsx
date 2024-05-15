import { useState } from "react";
import TableToolbar from "./TableToolbar";
import TablePagination from "./TablePagination";
import {
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import DataTableRowActions from "./DataTableRowActions";
import axios from "axios";
import Swal from "sweetalert2";
import { IoIosArrowDown } from "react-icons/io";
import { Card } from "../ui/card";
import { Separator } from "../ui/separator";
import { useDispatch, useSelector } from "react-redux";
import { ScrollArea } from "../ui/scroll-area";

const Tablee = ({ data, columns, columnName }) => {
  const [sorting, setSorting] = useState([]);
  const [columnVisibility, setColumnVisibility] = useState();
  const [columnFilters, setColumnFilters] = useState([]);
  const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable({
    data,
    columns: columns,
    state: {
      sorting: sorting,
      columnVisibility: columnVisibility,
      rowSelection: rowSelection,
      columnFilters: columnFilters,
    },
    enableRowSelection: true,
    onSortingChange: setSorting,
    onRowSelectionChange: setRowSelection,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  });

  return (
    <div>
      <Card className="px-3">
        <div className="p-4">
          <TableToolbar table={table} columnName={columnName} />
        </div>
        <Table>
          <ScrollArea orientation="horizontal" className="w-full">
            <TableHeader className="bg-blue-100 cursor-pointer">
              <TableHead>
                {table.getHeaderGroups().map((headerGroup) => (
                  <div>
                    <tr key={headerGroup.id} className="flex w-full">
                      {headerGroup.headers.map((header) => (
                        <>
                          <th
                            className="text-start w-full"
                            key={header.id}
                            onClick={header.column.getToggleSortingHandler()}
                          >
                            {header.isPlaceholder ? null : (
                              <span className="flex items-center text-md">
                                <span className="flex items-center uppercase">
                                  {flexRender(
                                    header.column.columnDef.header,
                                    header.getContext()
                                  )}
                                </span>
                              </span>
                            )}
                          </th>
                        </>
                      ))}
                    </tr>
                  </div>
                ))}
              </TableHead>
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows.map((row, index) => (
                <>
                  <span
                    key={index}
                    className={`flex ${
                      index % 2 !== 0 ? "bg-gray-100" : ""
                    } px-3 flex justify-evenly py-2 w-full cursor-pointer items-center`}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <td key={cell.id} className="text-start w-full ">
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    ))}
                    <DataTableRowActions />
                  </span>
                </>
              ))}
            </TableBody>
          </ScrollArea>
        </Table>
        <div className="py-2 flex justify-end w-full">
          <TablePagination table={table} />
        </div>
      </Card>
    </div>
  );
};

export default Tablee;
