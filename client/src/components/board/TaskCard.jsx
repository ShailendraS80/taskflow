function TaskCard({ task }) {
  return (
    <div className="bg-slate-800 rounded-lg p-4">

      <h3 className="font-semibold text-white">
        {task.title}
      </h3>

      <p className="text-slate-400 text-sm mt-2">
        {task.description}
      </p>

      <div className="flex justify-between mt-4">

        <span className="text-xs bg-blue-600 px-2 py-1 rounded">
          {task.priority}
        </span>

        <span className="text-xs text-slate-400">
          {task.status}
        </span>

      </div>

    </div>
  );
}

export default TaskCard;