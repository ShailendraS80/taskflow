function BoardCard({ board }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-blue-500 transition cursor-pointer">
      <h2 className="text-xl font-semibold text-white">
        {board.title}
      </h2>

      <p className="text-slate-400 mt-2">
        {board.description || "No description"}
      </p>
    </div>
  );
}

export default BoardCard;