import { Pencil, Trash2 } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

function TaskCard({
  task,
  onEdit,
  onDelete,
  onStatusChange,
}) {
  const { theme } = useTheme();

  return (
    <div
      className={`rounded-xl p-4 border transition-all duration-300 hover:border-blue-500 ${
        theme === "dark"
          ? "bg-slate-800 border-slate-700"
          : "bg-white border-slate-200 shadow-sm"
      }`}
    >
      <div className="flex justify-between items-start">
        <h3
          className={`font-semibold text-lg ${
            theme === "dark"
              ? "text-white"
              : "text-slate-900"
          }`}
        >
          {task.title}
        </h3>

        <div className="flex gap-2">
          <button
            onClick={() => onEdit(task)}
            className="text-yellow-500 hover:text-yellow-600"
          >
            <Pencil size={18} />
          </button>

          <button
            onClick={() => onDelete(task._id)}
            className="text-red-500 hover:text-red-600"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>

      <p
        className={`mt-3 ${
          theme === "dark"
            ? "text-slate-400"
            : "text-slate-600"
        }`}
      >
        {task.description || "No description"}
      </p>

      <div className="mt-4">
        <label
          className={`text-xs block mb-1 ${
            theme === "dark"
              ? "text-slate-400"
              : "text-slate-600"
          }`}
        >
          Status
        </label>

        <select
          value={task.status}
          onChange={(e) =>
            onStatusChange(task._id, e.target.value)
          }
          className={`w-full rounded px-3 py-2 border transition ${
            theme === "dark"
              ? "bg-slate-700 text-white border-slate-600"
              : "bg-slate-50 text-slate-900 border-slate-300"
          }`}
        >
          <option value="Todo">Todo</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>
      </div>

      <div className="flex justify-between items-center mt-5">
        <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">
          {task.priority}
        </span>

        <span
          className={`text-xs ${
            theme === "dark"
              ? "text-slate-400"
              : "text-slate-600"
          }`}
        >
          {task.dueDate
            ? new Date(task.dueDate).toLocaleDateString()
            : "No Due Date"}
        </span>
      </div>
    </div>
  );
}

export default TaskCard;