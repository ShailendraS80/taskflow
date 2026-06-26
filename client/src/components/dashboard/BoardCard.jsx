import { useNavigate } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

function BoardCard({ board }) {
  const navigate = useNavigate();
  const { theme } = useTheme();

  return (
    <div
      onClick={() => navigate(`/board/${board._id}`)}
      className={`rounded-xl p-6 cursor-pointer border transition-all duration-300 hover:border-blue-500 ${
        theme === "dark"
          ? "bg-slate-900 border-slate-800"
          : "bg-white border-slate-200 shadow-sm hover:shadow-md"
      }`}
    >
      <h2
        className={`text-xl font-semibold ${
          theme === "dark"
            ? "text-white"
            : "text-slate-900"
        }`}
      >
        {board.title}
      </h2>

      <p
        className={`mt-2 ${
          theme === "dark"
            ? "text-slate-400"
            : "text-slate-600"
        }`}
      >
        {board.description || "No description"}
      </p>
    </div>
  );
}

export default BoardCard;