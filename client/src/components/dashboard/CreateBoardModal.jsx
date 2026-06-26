import { useState } from "react";

function CreateBoardModal({
  onClose,
  onSubmit,
}) {
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
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center">

      <div className="bg-slate-900 rounded-xl p-8 w-full max-w-md">

        <h2 className="text-2xl font-bold text-white mb-6">
          Create Board
        </h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Board Title"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            className="w-full mb-4 bg-slate-800 rounded-lg p-3 text-white"
          />

          <textarea
            placeholder="Description"
            value={description}
            onChange={(e)=>setDescription(e.target.value)}
            className="w-full mb-6 bg-slate-800 rounded-lg p-3 text-white"
          />

          <div className="flex justify-end gap-4">

            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 rounded-lg bg-slate-700 text-white"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-5 py-2 rounded-lg bg-blue-600 text-white"
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