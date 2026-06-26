import { useEffect, useState } from "react";
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
    try {
      await createTask(taskData, token);
      setShowCreateModal(false);
      loadTasks();
    } catch (error) {
      console.error(error);
      alert("Failed to create task");
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
    } catch (error) {
      console.error(error);
      alert("Failed to update task");
    }
  }

  async function handleDelete(taskId) {
    if (!window.confirm("Delete this task?")) return;

    try {
      await deleteTask(taskId, token);
      loadTasks();
    } catch (error) {
      console.error(error);
      alert("Failed to delete task");
    }
  }

  async function handleStatusChange(taskId, status) {
    try {
      await updateTaskStatus(taskId, status, token);
      loadTasks();
    } catch (error) {
      console.error(error);
      alert("Failed to update task status");
    }
  }

  const todo = tasks.filter(
    (task) => task.status === "Todo"
  );

  const progress = tasks.filter(
    (task) => task.status === "In Progress"
  );

  const done = tasks.filter(
    (task) => task.status === "Done"
  );

  return (
    <DashboardLayout>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white">
            Board
          </h1>

          <p className="text-slate-400 mt-2">
            Total Tasks: {tasks.length}
          </p>
        </div>

        <button
          onClick={() => setShowCreateModal(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg"
        >
          + Add Task
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
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