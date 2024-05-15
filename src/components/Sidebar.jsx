import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex flex-col gap-2 px-5 py-2">
      <Link to="/profile" className="border px-2 py-1 justify-self-center ">
        Profile
      </Link>
      <Link to="/account" className="border px-2 py-1 justify-self-center ">
        Account
      </Link>
    </div>
  );
};

export default Sidebar;
