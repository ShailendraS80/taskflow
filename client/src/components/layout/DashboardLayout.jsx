import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { useTheme } from "../../context/ThemeContext";

function DashboardLayout({ children }) {
  const { theme } = useTheme();

  return (
    <div
      className={`flex min-h-screen transition-colors duration-300 ${
        theme === "dark"
          ? "bg-slate-950"
          : "bg-slate-100"
      }`}
    >
      <Sidebar />

      <main className="flex-1 p-8">
        <Navbar />
        {children}
      </main>
    </div>
  );
}

export default DashboardLayout;