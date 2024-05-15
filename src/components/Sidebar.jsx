import { MdDashboard } from "react-icons/md";

const Sidebar = () => {
  return (
    <nav>
      <div className="flex items-center gap-2">
        <MdDashboard />
        <span>Dashboard</span>
      </div>
      <div className="flex  items-center gap-2">
        <MdDashboard />
        <span>Accounts</span>
      </div>
      <div className="flex  items-center gap-2">
        <MdDashboard />
        <span>Contact</span>
      </div>
    </nav>
  );
};

export default Sidebar;
