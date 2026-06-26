import {
  LayoutDashboard,
  FolderKanban,
  Settings,
  LogOut,
} from "lucide-react";

import { useAuth } from "../../context/AuthContext";
import { useTheme } from "../../context/ThemeContext";

function Sidebar() {
  const { logout } = useAuth();
  const { theme } = useTheme();

  return (
    <aside
      className={`w-64 min-h-screen p-6 border-r transition-colors duration-300 ${
        theme === "dark"
          ? "bg-slate-900 border-slate-800"
          : "bg-white border-slate-200"
      }`}
    >
      <h1
        className={`text-3xl font-bold mb-10 ${
          theme === "dark"
            ? "text-white"
            : "text-slate-900"
        }`}
      >
        TaskFlow
      </h1>

      <nav className="space-y-2">
        <button className="flex items-center gap-3 w-full px-4 py-3 rounded-lg bg-blue-600 text-white">
          <LayoutDashboard size={20} />
          Dashboard
        </button>

        <button
          className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg transition ${
            theme === "dark"
              ? "text-slate-300 hover:bg-slate-800"
              : "text-slate-700 hover:bg-slate-100"
          }`}
        >
          <FolderKanban size={20} />
          Boards
        </button>

        <button
          className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg transition ${
            theme === "dark"
              ? "text-slate-300 hover:bg-slate-800"
              : "text-slate-700 hover:bg-slate-100"
          }`}
        >
          <Settings size={20} />
          Settings
        </button>
      </nav>

      <button
        onClick={logout}
        className="mt-12 flex items-center gap-3 text-red-500 hover:text-red-600 transition"
      >
        <LogOut size={20} />
        Logout
      </button>
    </aside>
  );
}

export default Sidebar;