import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

function NotFound() {
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen flex items-center justify-center px-4 ${
        theme === "dark"
          ? "bg-slate-950"
          : "bg-slate-100"
      }`}
    >
      <div className="text-center">

        <h1
          className={`text-8xl font-bold ${
            theme === "dark"
              ? "text-white"
              : "text-slate-900"
          }`}
        >
          404
        </h1>

        <h2
          className={`mt-4 text-3xl font-bold ${
            theme === "dark"
              ? "text-white"
              : "text-slate-900"
          }`}
        >
          Page Not Found
        </h2>

        <p
          className={`mt-3 ${
            theme === "dark"
              ? "text-slate-400"
              : "text-slate-600"
          }`}
        >
          The page you're looking for doesn't exist.
        </p>

        <Link
          to="/dashboard"
          className="inline-block mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition"
        >
          Go to Dashboard
        </Link>

      </div>
    </div>
  );
}

export default NotFound;