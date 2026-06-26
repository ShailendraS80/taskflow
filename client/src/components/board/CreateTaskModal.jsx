import { useState } from "react";
import { useTheme } from "../../context/ThemeContext";

function CreateTaskModal({ boardId, onClose, onCreate }) {
  const { theme } = useTheme();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "Medium",
    status: "Todo",
    dueDate: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    onCreate({
      ...formData,
      board: boardId,
    });
  }

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">

      <div
        className={`w-full max-w-lg rounded-xl p-6 transition-colors ${
          theme === "dark"
            ? "bg-slate-900"
            : "bg-white shadow-xl"
        }`}
      >

        <h2
          className={`text-2xl font-bold mb-6 ${
            theme === "dark"
              ? "text-white"
              : "text-slate-900"
          }`}
        >
          Create Task
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="title"
            placeholder="Task title"
            value={formData.title}
            onChange={handleChange}
            required
            className={`w-full p-3 rounded-lg border ${
              theme === "dark"
                ? "bg-slate-800 border-slate-700 text-white"
                : "bg-slate-50 border-slate-300 text-slate-900"
            }`}
          />

          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            className={`w-full p-3 rounded-lg border ${
              theme === "dark"
                ? "bg-slate-800 border-slate-700 text-white"
                : "bg-slate-50 border-slate-300 text-slate-900"
            }`}
          />

          <select
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            className={`w-full p-3 rounded-lg border ${
              theme === "dark"
                ? "bg-slate-800 border-slate-700 text-white"
                : "bg-slate-50 border-slate-300 text-slate-900"
            }`}
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className={`w-full p-3 rounded-lg border ${
              theme === "dark"
                ? "bg-slate-800 border-slate-700 text-white"
                : "bg-slate-50 border-slate-300 text-slate-900"
            }`}
          >
            <option>Todo</option>
            <option>In Progress</option>
            <option>Done</option>
          </select>

          <input
            type="date"
            name="dueDate"
            value={formData.dueDate}
            onChange={handleChange}
            className={`w-full p-3 rounded-lg border ${
              theme === "dark"
                ? "bg-slate-800 border-slate-700 text-white"
                : "bg-slate-50 border-slate-300 text-slate-900"
            }`}
          />

          <div className="flex justify-end gap-3">

            <button
              type="button"
              onClick={onClose}
              className={`px-5 py-2 rounded-lg ${
                theme === "dark"
                  ? "bg-slate-700 text-white hover:bg-slate-600"
                  : "bg-slate-200 text-slate-900 hover:bg-slate-300"
              }`}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white"
            >
              Create
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default CreateTaskModal;