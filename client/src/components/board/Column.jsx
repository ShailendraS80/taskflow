import TaskCard from "./TaskCard";

function Column({
  title,
  tasks,
  onEdit,
  onDelete,
  onStatusChange,
}) {
  return (
    <div className="bg-slate-900 rounded-xl p-4 min-h-[600px]">
      <h2 className="text-xl font-bold text-white mb-6">
        {title}
      </h2>

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