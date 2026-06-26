import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

import DashboardLayout from "../components/layout/DashboardLayout";
import Column from "../components/board/Column";
import CreateTaskModal from "../components/board/CreateTaskModal";
import EditTaskModal from "../components/board/EditTaskModal";
import AIModal from "../components/board/AIModal";

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

  const [showAI, setShowAI] = useState(false);

  useEffect(() => {
    loadTasks();
  }, []);

  async function loadTasks() {
    try {
      const data = await getTasks(id, token);
      setTasks(data.tasks);
    } catch (error) {
      console.error(error);
      toast.error("Failed to load tasks");
    }
  }

  async function handleCreateTask(taskData) {
    try {
      await createTask(taskData, token);
      setShowCreateModal(false);
      loadTasks();
      toast.success("Task created successfully");
    } catch (error) {
      console.error(error);
      toast.error("Failed to create task");
    }
  }

  function handleEdit(task) {
    setSelectedTask(task);
    setShowEditModal(true);
  }

  async function handleSave(updatedData) {
    try {
      await updateTask(selectedTask._id, updatedData, token);
      setShowEditModal(false);
      setSelectedTask(null);
      loadTasks();
      toast.success("Task updated successfully");
    } catch (error) {
      console.error(error);
      toast.error("Failed to update task");
    }
  }

  async function handleDelete(taskId) {
    if (!window.confirm("Delete this task?")) return;

    try {
      await deleteTask(taskId, token);
      loadTasks();
      toast.success("Task deleted successfully");
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete task");
    }
  }

  async function handleStatusChange(taskId, status) {
    try {
      await updateTaskStatus(taskId, status, token);
      loadTasks();
      toast.success("Task status updated");
    } catch (error) {
      console.error(error);
      toast.error("Failed to update task status");
    }
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

        <div className="flex gap-3">
          <button
            onClick={() => setShowAI(true)}
            className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-lg"
          >
            🤖 AI Tasks
          </button>

          <button
            onClick={() => setShowCreateModal(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg"
          >
            + Add Task
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <input
          type="text"
          placeholder="🔍 Search tasks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-slate-800 text-white rounded-lg px-4 py-3"
        />

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
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

      {showAI && (
        <AIModal
          onClose={() => setShowAI(false)}
        />
      )}
    </DashboardLayout>
  );
}

export default Board;