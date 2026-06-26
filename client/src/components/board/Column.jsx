import TaskCard from "./TaskCard";
import { useTheme } from "../../context/ThemeContext";

function Column({
  title,
  tasks,
  onEdit,
  onDelete,
  onStatusChange,
}) {
  const { theme } = useTheme();

  return (
    <div
      className={`rounded-xl p-4 min-h-[600px] transition-colors duration-300 ${
        theme === "dark"
          ? "bg-slate-900"
          : "bg-white border border-slate-200 shadow-sm"
      }`}
    >
      <div className="flex justify-between items-center mb-6">
        <h2
          className={`text-xl font-bold ${
            theme === "dark"
              ? "text-white"
              : "text-slate-900"
          }`}
        >
          {title}
        </h2>

        <span
          className={`text-sm px-3 py-1 rounded-full ${
            theme === "dark"
              ? "bg-slate-800 text-slate-300"
              : "bg-slate-100 text-slate-700"
          }`}
        >
          {tasks.length}
        </span>
      </div>

      <div className="space-y-4">
        {tasks.map((task) => (
          <TaskCard
            key={task._id}
            task={task}
            onEdit={onEdit}
            onDelete={onDelete}
            onStatusChange={onStatusChange}
          />
        ))}
      </div>
    </div>
  );
}

export default Column;