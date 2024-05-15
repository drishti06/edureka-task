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

const Tablee = ({ data, columns, columnName }) => {
  const [sorting, setSorting] = useState([]);
  const [columnVisibility, setColumnVisibility] = useState({ id: false });
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
    <div className="ml-1">
      <div className="py-2">
        <TableToolbar table={table} columnName={columnName} />
      </div>
      <Card>
        <Table className="overflow-scroll overflow-x-visible pdf-table w-full text-sm text-lefttext-gray-500 ">
          <TableHeader className="hover:bg-gray-50 cursor-pointer">
            <TableHead className="">
              {table.getHeaderGroups().map((headerGroup) => (
                <div className="flex text-center ">
                  <tr key={headerGroup.id} className="flex w-full">
                    {headerGroup.headers.map((header) => (
                      <>
                        <th
                          className="text-start w-full"
                          key={header.id}
                          onClick={header.column.getToggleSortingHandler()}
                        >
                          {header.isPlaceholder ? null : (
                            <span
                              className="flex items-center gap-1 text-md"
                              onClick={() =>
                                setShowIcon((prevShowIcon) => ({
                                  ...Object.fromEntries(
                                    Object.entries(prevShowIcon).map(
                                      ([key]) => [key, false]
                                    )
                                  ),
                                  [header.id]: !prevShowIcon[header.id],
                                }))
                              }
                            >
                              <span className="flex items-center gap-2 uppercase ">
                                {flexRender(
                                  header.column.columnDef.header,
                                  header.getContext()
                                )}
                                <IoIosArrowDown />
                              </span>
                            </span>
                          )}
                        </th>
                      </>
                    ))}
                    <div>
                      <span className="text-transparent">{" Opts"}</span>
                    </div>
                  </tr>
                </div>
              ))}
            </TableHead>
          </TableHeader>
          <Separator />
          <TableBody>
            {table.getRowModel().rows.map((row, index) => (
              <>
                <TableCell
                  // onMouseOver={() => {
                  //   setSelectedRow(row.original);
                  // }}
                  key={index}
                  className="flex hover:bg-gray-50 w-full cursor-pointer justify-evenly items-center py-2"
                >
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} className="p-2 w-full capitalize">
                      {cell.row.original === "departments"
                        ? cell.row.original.departments.map(
                            (department, index) => (
                              <div key={index}>{department.key}</div>
                            )
                          )
                        : flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                    </td>
                  ))}
                  {/* <DataTableRowActions
                  {...tableProps}
                  /> */}
                </TableCell>
                {table.getRowModel().rows.length - 1 !== index && <Separator />}
              </>
            ))}
          </TableBody>
        </Table>
      </Card>
      <div className="flex justify-between items-center">
        <div className="py-2">
          <TablePagination table={table} />
        </div>
      </div>
    </div>
  );
};

export default Tablee;
