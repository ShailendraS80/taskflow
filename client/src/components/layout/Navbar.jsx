import { Bell, Search, Moon } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

function Navbar() {
  const { user } = useAuth();

  return (
    <header className="flex items-center justify-between mb-8">
      <h2 className="text-3xl font-bold text-white">
        Welcome, {user?.name}
      </h2>

      <div className="flex items-center gap-4">
        <Search className="text-slate-400" />
        <Bell className="text-slate-400" />
        <Moon className="text-slate-400" />

        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white">
          {user?.name?.charAt(0)}
        </div>
      </div>
    </header>
  );
}

export default Navbar;