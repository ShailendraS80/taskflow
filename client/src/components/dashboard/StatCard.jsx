import { useTheme } from "../../context/ThemeContext";

function StatCard({ title, value }) {
  const { theme } = useTheme();

  return (
    <div
      className={`rounded-xl p-6 border transition-colors duration-300 ${
        theme === "dark"
          ? "bg-slate-900 border-slate-800"
          : "bg-white border-slate-200 shadow-sm"
      }`}
    >
      <h3
        className={`text-sm ${
          theme === "dark"
            ? "text-slate-400"
            : "text-slate-600"
        }`}
      >
        {title}
      </h3>

      <p
        className={`text-3xl font-bold mt-2 ${
          theme === "dark"
            ? "text-white"
            : "text-slate-900"
        }`}
      >
        {value}
      </p>
    </div>
  );
}

export default StatCard;