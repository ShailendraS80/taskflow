import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import DashboardLayout from "../components/layout/DashboardLayout";
import Column from "../components/board/Column";
import CreateTaskModal from "../components/board/CreateTaskModal";

import { useAuth } from "../context/AuthContext";
import {
  getTasks,
  createTask,
} from "../services/taskService";

function Board() {
  const { id } = useParams();
  const { token } = useAuth();

  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);

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
      setShowModal(false);
      loadTasks();
    } catch (error) {
      console.error(error);
      alert("Failed to create task");
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
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white">
            Board
          </h1>

          <p className="text-slate-400 mt-2">
            Total Tasks: {tasks.length}
          </p>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg"
        >
          + Add Task
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Column
          title={`Todo (${todo.length})`}
          tasks={todo}
        />

        <Column
          title={`In Progress (${progress.length})`}
          tasks={progress}
        />

        <Column
          title={`Done (${done.length})`}
          tasks={done}
        />
      </div>

      {showModal && (
        <CreateTaskModal
          boardId={id}
          onClose={() => setShowModal(false)}
          onCreate={handleCreateTask}
        />
      )}
    </DashboardLayout>
  );
}

export default Board;