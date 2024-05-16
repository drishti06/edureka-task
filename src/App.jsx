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
      <ResizablePanelGroup direction="horizontal">
        <div className="w-2rem sm:block">
          <Sidebar />
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
