import { Pencil, Trash2 } from "lucide-react";

function TaskCard({
  task,
  onEdit,
  onDelete,
  onStatusChange,
}) {
  return (
    <div className="bg-slate-800 rounded-xl p-4 border border-slate-700 hover:border-blue-500 transition">

      <div className="flex justify-between items-start">

        <h3 className="font-semibold text-white text-lg">
          {task.title}
        </h3>

        <div className="flex gap-2">

          <button
            onClick={() => onEdit(task)}
            className="text-yellow-400 hover:text-yellow-300"
          >
            <Pencil size={18} />
          </button>

          <button
            onClick={() => onDelete(task._id)}
            className="text-red-400 hover:text-red-300"
          >
            <Trash2 size={18} />
          </button>

        </div>

      </div>

      <p className="text-slate-400 mt-3">
        {task.description || "No description"}
      </p>

      <div className="mt-4">

        <label className="text-xs text-slate-400 block mb-1">
          Status
        </label>

        <select
          value={task.status}
          onChange={(e) =>
            onStatusChange(task._id, e.target.value)
          }
          className="w-full bg-slate-700 text-white rounded px-3 py-2"
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

        <span className="text-xs text-slate-400">
          {task.dueDate
            ? new Date(task.dueDate).toLocaleDateString()
            : "No Due Date"}
        </span>

      </div>

    </div>
  );
}

export default TaskCard;