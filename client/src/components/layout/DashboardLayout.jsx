import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

function DashboardLayout({ children }) {
  return (
    <div className="flex bg-slate-950 min-h-screen">
      <Sidebar />

      <main className="flex-1 p-8">
        <Navbar />
        {children}
      </main>
    </div>
  );
}

export default DashboardLayout;