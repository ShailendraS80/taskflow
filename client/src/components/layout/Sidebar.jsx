import { LayoutDashboard, FolderKanban, Settings, LogOut } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

function Sidebar() {
  const { logout } = useAuth();

  return (
    <aside className="w-64 bg-slate-900 border-r border-slate-800 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-white mb-10">
        TaskFlow
      </h1>

      <nav className="space-y-2">
        <button className="flex items-center gap-3 w-full px-4 py-3 rounded-lg bg-blue-600 text-white">
          <LayoutDashboard size={20} />
          Dashboard
        </button>

        <button className="flex items-center gap-3 w-full px-4 py-3 rounded-lg text-slate-300 hover:bg-slate-800">
          <FolderKanban size={20} />
          Boards
        </button>

        <button className="flex items-center gap-3 w-full px-4 py-3 rounded-lg text-slate-300 hover:bg-slate-800">
          <Settings size={20} />
          Settings
        </button>
      </nav>

      <button
        onClick={logout}
        className="mt-12 flex items-center gap-3 text-red-400 hover:text-red-300"
      >
        <LogOut size={20} />
        Logout
      </button>
    </aside>
  );
}

export default Sidebar;