import { useTheme } from "../context/ThemeContext";

function AuthLayout({ title, subtitle, children }) {
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen flex items-center justify-center px-4 transition-colors duration-300 ${
        theme === "dark"
          ? "bg-slate-950"
          : "bg-slate-100"
      }`}
    >
      <div
        className={`w-full max-w-md rounded-2xl p-8 border transition-colors duration-300 ${
          theme === "dark"
            ? "bg-slate-900 border-slate-800 shadow-2xl"
            : "bg-white border-slate-200 shadow-xl"
        }`}
      >
        <div className="text-center mb-8">
          <h1
            className={`text-3xl font-bold ${
              theme === "dark"
                ? "text-white"
                : "text-slate-900"
            }`}
          >
            TaskFlow
          </h1>

          <h2
            className={`mt-6 text-2xl font-semibold ${
              theme === "dark"
                ? "text-white"
                : "text-slate-900"
            }`}
          >
            {title}
          </h2>

          <p
            className={`mt-2 ${
              theme === "dark"
                ? "text-slate-400"
                : "text-slate-600"
            }`}
          >
            {subtitle}
          </p>
        </div>

        {children}
      </div>
    </div>
  );
}

export default AuthLayout;