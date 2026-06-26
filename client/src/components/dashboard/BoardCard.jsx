import { useNavigate } from "react-router-dom";
import { Pencil, Trash2 } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

function BoardCard({
  board,
  onEdit,
  onDelete,
}) {
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
      <div className="flex justify-between items-start">

        <div className="flex-1">
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

        <div className="flex gap-2">

          <button
            onClick={(e) => {
              e.stopPropagation();
              onEdit(board);
            }}
            className="text-yellow-500 hover:text-yellow-600"
          >
            <Pencil size={18} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onDelete(board._id);
            }}
            className="text-red-500 hover:text-red-600"
          >
            <Trash2 size={18} />
          </button>

        </div>

      </div>
    </div>
  );
}

export default BoardCard;