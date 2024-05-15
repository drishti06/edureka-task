import React, { useState } from "react";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { MdDeleteForever } from "react-icons/md";
import { AiOutlineStop } from "react-icons/ai";
import { RiRestartLine } from "react-icons/ri";
import { AiTwotoneEdit } from "react-icons/ai";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
// import useLogout from "@/context/logout";

function DataTableRowActions() {
  const navigate = useNavigate();
  // const { logout } = useLogout();
  // const [isLoading, setIsLoading] = useState(false);
  // const handleFormStatus = async (status) => {
  //   try {
  //     let endpoint;
  //     if (status === "Start") {
  //       endpoint = "activate";
  //     } else if (status === "Stop") {
  //       endpoint = "close";
  //     }
  //     setIsLoading(true);
  //     await axios
  //       .post(
  //         `${import.meta.env.VITE_BASEURL}/form/${endpoint}/${editForm.id}`,
  //         {},
  //         {
  //           headers: {
  //             Authorization: "Bearer " + localStorage.getItem("token"),
  //           },
  //         }
  //       )
  //       .catch((error) => {
  //         if (error.response.status === 401 || error.response.status === 403) {
  //           // logout();
  //         } else if (error.response.status === 400) {
  //           Swal.fire({
  //             icon: "error",
  //             text: `${error.response.data.error}`,
  //           });
  //         }
  //       });
  //     setLoad(true);
  //   } catch (error) {
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex  h-8 w-8 p-2 data-[state=open]:bg-muted"
        >
          <DotsHorizontalIcon className="h-4 w-4" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="shadoww w-[160px]">
        {/* {options && (
          <>
            <div>
              {editForm?.status == "ACTIVE" ? (
                <DropdownMenuItem
                  disabled={isLoading}
                  onClick={() => handleFormStatus("Stop")}
                  className="flex gap-2 items-center"
                >
                  <AiOutlineStop className="text-lg" />
                  <span>Stop</span>
                </DropdownMenuItem>
              ) : (
                <DropdownMenuItem
                  disabled={isLoading}
                  onClick={() => handleFormStatus("Start")}
                  className="flex gap-2 items-center"
                >
                  <RiRestartLine className="text-lg" />
                  <span>Start</span>
                </DropdownMenuItem>
              )}
            </div>
            <DropdownMenuItem
              onClick={() => {
                navigate("/form-details", {
                  state: { id: editForm.id },
                });
              }}
              className="flex gap-2 items-center"
            >
              <HiOutlineClipboardDocumentList className="text-lg" />
              <span>Details</span>
            </DropdownMenuItem>
          </>
        )} */}
        <ul>
          {!options && (
            <>
              {!respData && (
                <DropdownMenuItem
                  onClick={() => factId(editForm)}
                  className="flex gap-2 items-center"
                >
                  <HiOutlineClipboardDocumentList className="text-lg" />
                  <span>Details</span>
                </DropdownMenuItem>
              )}
            </>
          )}
          <DropdownMenuItem
            className="flex gap-2 items-center"
            onClick={() => {
              if (options) {
                navigate("/create-form", { state: { id: editForm.id } });
              } else if (factData) {
                factData(editForm);
              } else if (respData) {
                respData(editForm);
              }
            }}
          >
            <AiTwotoneEdit className="text-lg" />
            <span>Edit</span>
          </DropdownMenuItem>
          {!respData && (
            <>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleDelete}>
                <div className="flex items-center gap-2 text-red-400">
                  <MdDeleteForever className="text-lg" />
                  <span className="text-md" disabled={isDisable}>
                    Delete
                  </span>
                </div>
              </DropdownMenuItem>
            </>
          )}
        </ul>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default DataTableRowActions;
