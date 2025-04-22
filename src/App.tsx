import { useState } from "react";
import DirectoryView from "./components/views/DirectoryView";
import AppointmentsView from "./components/views/AppointmentsView";
import Sidebar from "./components/ui/SideBar";

function App() {
  const [view, setView] = useState<"directory" | "appointments">("directory");

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar view={view} setView={setView} />

      {/* Main Content */}
      <div className="ml-20 flex-1 overflow-y-auto p-6">
        {view === "directory" ? <DirectoryView /> : <AppointmentsView />}
      </div>
    </div>
  );
}

export default App;