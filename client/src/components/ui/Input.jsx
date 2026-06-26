import { useTheme } from "../../context/ThemeContext";

function Input({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  name,
}) {
  const { theme } = useTheme();

  return (
    <div className="mb-5">
      <label
        className={`block text-sm mb-2 ${
          theme === "dark"
            ? "text-slate-300"
            : "text-slate-700"
        }`}
      >
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        className={`w-full rounded-xl border px-4 py-3 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
          theme === "dark"
            ? "bg-slate-800 border-slate-700 text-white placeholder:text-slate-400"
            : "bg-white border-slate-300 text-slate-900 placeholder:text-slate-500"
        }`}
      />
    </div>
  );
}

export default Input;