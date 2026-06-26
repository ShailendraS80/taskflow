import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";

import DashboardLayout from "../components/layout/DashboardLayout";
import Column from "../components/board/Column";
import CreateTaskModal from "../components/board/CreateTaskModal";
import EditTaskModal from "../components/board/EditTaskModal";

import { useAuth } from "../context/AuthContext";
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
  updateTaskStatus,
} from "../services/taskService";

function Board() {
  const { id } = useParams();
  const { token } = useAuth();

  const [tasks, setTasks] = useState([]);

  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const [selectedTask, setSelectedTask] = useState(null);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    loadTasks();
  }, []);

  async function loadTasks() {
    try {
      const data = await getTasks(id, token);
      setTasks(data.tasks);
    } catch (error) {
      console.error(error);
    }
  }

  async function handleCreateTask(taskData) {
    await createTask(taskData, token);
    setShowCreateModal(false);
    loadTasks();
  }

  function handleEdit(task) {
    setSelectedTask(task);
    setShowEditModal(true);
  }

  async function handleSave(updatedData) {
    await updateTask(selectedTask._id, updatedData, token);
    setShowEditModal(false);
    setSelectedTask(null);
    loadTasks();
  }

  async function handleDelete(taskId) {
    if (!window.confirm("Delete this task?")) return;

    await deleteTask(taskId, token);
    loadTasks();
  }

  async function handleStatusChange(taskId, status) {
    await updateTaskStatus(taskId, status, token);
    loadTasks();
  }

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      const matchesSearch =
        task.title.toLowerCase().includes(search.toLowerCase()) ||
        (task.description || "")
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesFilter =
        filter === "All" || task.priority === filter;

      return matchesSearch && matchesFilter;
    });
  }, [tasks, search, filter]);

  const todo = filteredTasks.filter(
    (task) => task.status === "Todo"
  );

  const progress = filteredTasks.filter(
    (task) => task.status === "In Progress"
  );

  const done = filteredTasks.filter(
    (task) => task.status === "Done"
  );

  return (
    <DashboardLayout>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white">
            Board
          </h1>

          <p className="text-slate-400">
            Total Tasks: {filteredTasks.length}
          </p>
        </div>

        <button
          onClick={() => setShowCreateModal(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg"
        >
          + Add Task
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-8">

        <input
          type="text"
          placeholder="🔍 Search tasks..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="bg-slate-800 text-white rounded-lg px-4 py-3"
        />

        <select
          value={filter}
          onChange={(e) =>
            setFilter(e.target.value)
          }
          className="bg-slate-800 text-white rounded-lg px-4 py-3"
        >
          <option>All</option>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>

      </div>

      <div className="grid lg:grid-cols-3 gap-6">

        <Column
          title="Todo"
          tasks={todo}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onStatusChange={handleStatusChange}
        />

        <Column
          title="In Progress"
          tasks={progress}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onStatusChange={handleStatusChange}
        />

        <Column
          title="Done"
          tasks={done}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onStatusChange={handleStatusChange}
        />

      </div>

      {showCreateModal && (
        <CreateTaskModal
          boardId={id}
          onClose={() => setShowCreateModal(false)}
          onCreate={handleCreateTask}
        />
      )}

      {showEditModal && selectedTask && (
        <EditTaskModal
          task={selectedTask}
          onClose={() => {
            setShowEditModal(false);
            setSelectedTask(null);
          }}
          onSave={handleSave}
        />
      )}

    </DashboardLayout>
  );
}

export default Board;