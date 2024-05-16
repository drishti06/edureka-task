import React from "react";
import { Link, useLocation } from "react-router-dom";
import { IoPersonCircleSharp } from "react-icons/io5";
import { MdSwitchAccount } from "react-icons/md";

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="flex flex-col">
      <Link
        to="/profile"
        className={`flex items-center gap-2 px-5 py-2 ${
          location.pathname === "/profile" ? "bg-blue-100" : ""
        }`}
      >
        <IoPersonCircleSharp className="text-xl" />
<span className="hidden sm:block">
Profile 
</span>
        
      </Link>
      <Link
        to="/account"
        className={`flex items-center gap-2 px-5 py-2 ${
          location.pathname === "/account" ? "bg-blue-100" : ""
        }`}
      >
        <MdSwitchAccount className="text-xl" />
<span className="hidden sm:block">
Account 
</span>
        
      </Link>
    </div>
  );
};

export default Sidebar;
