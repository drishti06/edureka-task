import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Table from "./components/table/Table.jsx";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./components/ui/resizable";
import Accounts from "./components/Accounts";
import Form from "./components/Form";
import { ScrollArea } from "./components/ui/scroll-area";
import List from "./components/List";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <ResizablePanelGroup className="" direction="horizontal">
        <div className="flex flex-col gap-2 px-5 py-2">
          <Link to="/form" className="border px-2 py-1 justify-self-center ">
            Form
          </Link>
          <Link to="/account" className="border px-2 py-1 justify-self-center ">
            Account
          </Link>
        </div>
        <ResizableHandle className="" />
        <ResizablePanel>
          <List />
        </ResizablePanel>
        <ResizableHandle />
      </ResizablePanelGroup>
    </Router>
  );
}

export default App;
