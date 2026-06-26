import { useState } from "react";

function EditTaskModal({
  task,
  onClose,
  onSave,
}) {
  const [formData, setFormData] = useState({
    title: task.title,
    description: task.description,
    priority: task.priority,
    status: task.status,
    dueDate: task.dueDate
      ? task.dueDate.substring(0, 10)
      : "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    onSave(formData);
  }

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">

      <div className="bg-slate-900 rounded-xl p-6 w-full max-w-lg">

        <h2 className="text-2xl font-bold text-white mb-6">
          Edit Task
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >

          <input
            className="w-full p-3 rounded bg-slate-800 text-white"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />

          <textarea
            className="w-full p-3 rounded bg-slate-800 text-white"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />

          <select
            className="w-full p-3 rounded bg-slate-800 text-white"
            name="priority"
            value={formData.priority}
            onChange={handleChange}
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>

          <select
            className="w-full p-3 rounded bg-slate-800 text-white"
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option>Todo</option>
            <option>In Progress</option>
            <option>Done</option>
          </select>

          <input
            className="w-full p-3 rounded bg-slate-800 text-white"
            type="date"
            name="dueDate"
            value={formData.dueDate}
            onChange={handleChange}
          />

          <div className="flex justify-end gap-3">

            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 rounded bg-slate-700 text-white"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-5 py-2 rounded bg-blue-600 text-white"
            >
              Save
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default EditTaskModal;