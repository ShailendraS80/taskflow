import { Bell, Moon } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

function Navbar() {
  const { user } = useAuth();

  return (
    <header className="flex items-center justify-between mb-8">

      <div>
        <h2 className="text-3xl font-bold text-white">
          Welcome, {user?.name}
        </h2>

        <p className="text-slate-400">
          Manage your work efficiently
        </p>
      </div>

      <div className="flex items-center gap-5">

        <Bell
          size={22}
          className="text-slate-400"
        />

        <Moon
          size={22}
          className="text-slate-400"
        />

        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
          {user?.name?.charAt(0)}
        </div>

      </div>

    </header>
  );
}

export default Navbar;