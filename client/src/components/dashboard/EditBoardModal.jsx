import { useState } from "react";
import { useTheme } from "../../context/ThemeContext";

function EditBoardModal({
  board,
  onClose,
  onSave,
}) {
  const { theme } = useTheme();

  const [title, setTitle] = useState(board.title);
  const [description, setDescription] = useState(
    board.description || ""
  );

  function handleSubmit(e) {
    e.preventDefault();

    onSave({
      title,
      description,
    });
  }

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
      <div
        className={`w-full max-w-md rounded-xl p-8 ${
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
          Edit Board
        </h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Board Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`w-full mb-4 p-3 rounded-lg border ${
              theme === "dark"
                ? "bg-slate-800 border-slate-700 text-white"
                : "bg-slate-50 border-slate-300 text-slate-900"
            }`}
            required
          />

          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) =>
              setDescription(e.target.value)
            }
            className={`w-full mb-6 p-3 rounded-lg border ${
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
                  ? "bg-slate-700 text-white"
                  : "bg-slate-200 text-slate-900"
              }`}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditBoardModal;