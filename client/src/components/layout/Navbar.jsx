import { Bell, Moon, Sun } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import { useTheme } from "../../context/ThemeContext";

function Navbar() {
  const { user } = useAuth();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="flex items-center justify-between mb-8">

      <div>
        <h2
          className={`text-3xl font-bold ${
            theme === "dark" ? "text-white" : "text-slate-900"
          }`}
        >
          Welcome, {user?.name}
        </h2>

        <p
          className={
            theme === "dark"
              ? "text-slate-400"
              : "text-slate-600"
          }
        >
          Manage your work efficiently
        </p>
      </div>

      <div className="flex items-center gap-5">

        <Bell
          size={22}
          className={
            theme === "dark"
              ? "text-slate-400"
              : "text-slate-700"
          }
        />

        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 transition"
        >
          {theme === "dark" ? (
            <Sun size={22} className="text-yellow-400" />
          ) : (
            <Moon size={22} className="text-slate-700" />
          )}
        </button>

        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
          {user?.name?.charAt(0)}
        </div>

      </div>

    </header>
  );
}

export default Navbar;