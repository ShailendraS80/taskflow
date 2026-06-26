import { useState } from "react";
import { useTheme } from "../../context/ThemeContext";

function CreateBoardModal({
  onClose,
  onSubmit,
}) {
  const { theme } = useTheme();

  const [title, setTitle] = useState("");
  const [description, setDescription] =
    useState("");

  function handleSubmit(e) {
    e.preventDefault();

    onSubmit({
      title,
      description,
    });
  }

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">

      <div
        className={`w-full max-w-md rounded-xl p-8 transition-colors ${
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
          Create Board
        </h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Board Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`w-full mb-4 rounded-lg p-3 border ${
              theme === "dark"
                ? "bg-slate-800 border-slate-700 text-white"
                : "bg-slate-50 border-slate-300 text-slate-900"
            }`}
          />

          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className={`w-full mb-6 rounded-lg p-3 border ${
              theme === "dark"
                ? "bg-slate-800 border-slate-700 text-white"
                : "bg-slate-50 border-slate-300 text-slate-900"
            }`}
          />

          <div className="flex justify-end gap-4">

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

export default CreateBoardModal;