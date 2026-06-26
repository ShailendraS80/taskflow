import { useEffect, useState } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";
import StatCard from "../../components/dashboard/StatCard";
import BoardCard from "../../components/dashboard/BoardCard";
import CreateBoardModal from "../../components/dashboard/CreateBoardModal";
import { useTheme } from "../../context/ThemeContext";
import EditBoardModal from "../../components/dashboard/EditBoardModal";

import { useAuth } from "../../context/AuthContext";
import {
  getBoards,
  createBoard,
  updateBoard,
  deleteBoard,
} from "../../services/boardService";

import { getAllTasks } from "../../services/taskService";

function Dashboard() {
  const { token } = useAuth();
  const { theme } = useTheme();


  const [boards, setBoards] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
const [selectedBoard, setSelectedBoard] = useState(null);
  


  useEffect(() => {
  loadBoards();
  loadTasks();
}, []);

  async function loadBoards() {
  try {
    setLoading(true);
    setError("");

    const data = await getBoards(token);
    setBoards(data.boards);
  } catch (err) {
    console.error(err);
    setError("Unable to load boards. Please try again.");
  } finally {
    setLoading(false);
  }
}
  async function loadTasks() {
  try {
    const data = await getAllTasks(token);
    setTasks(data.tasks);
  } catch (error) {
    console.error(error);
  }
}

  async function handleCreate(boardData) {
  console.log("Board Data:", boardData);

  try {
    await createBoard(boardData, token);

    console.log("Board created successfully");

    setShowModal(false);

    await loadBoards();
    await loadTasks();
  } catch (error) {
    console.error("Create Board Error:", error);
  }
}

  async function handleUpdate(boardData) {
  try {
    await updateBoard(
      selectedBoard._id,
      boardData,
      token
    );

    setShowEditModal(false);
    setSelectedBoard(null);

    loadBoards();
  } catch (error) {
    console.error(error);
  }
}

async function handleDelete(boardId) {
  const confirmed = window.confirm(
    "Delete this board?"
  );

  if (!confirmed) return;

  try {
    await deleteBoard(boardId, token);
    loadBoards();
  } catch (error) {
    console.error(error);
  }
}

function handleEdit(board) {
  setSelectedBoard(board);
  setShowEditModal(true);
}

if (loading) {
  return (
    <DashboardLayout>
      <div className="flex items-center justify-center h-[60vh]">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>

          <p
            className={`mt-4 ${
              theme === "dark"
                ? "text-white"
                : "text-slate-900"
            }`}
          >
            Loading boards...
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
}

if (error) {
  return (
    <DashboardLayout>
      <div className="flex justify-center items-center h-[60vh]">
        <div
          className={`rounded-xl p-8 text-center ${
            theme === "dark"
              ? "bg-slate-900"
              : "bg-white shadow-lg"
          }`}
        >
          <div className="text-5xl mb-4">⚠️</div>

          <h2
            className={`text-2xl font-bold ${
              theme === "dark"
                ? "text-white"
                : "text-slate-900"
            }`}
          >
            Something went wrong
          </h2>

          <p
            className={`mt-3 ${
              theme === "dark"
                ? "text-slate-400"
                : "text-slate-600"
            }`}
          >
            {error}
          </p>

          <button
            onClick={loadBoards}
            className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
          >
            Retry
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}

  return (
    <DashboardLayout>
      <div className="flex justify-between items-center mb-8">
        <h1
  className={`text-3xl font-bold ${
    theme === "dark"
      ? "text-white"
      : "text-slate-900"
  }`}
>
  My Boards
</h1>

        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg"
        >
          + New Board
        </button>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <StatCard
  title="Boards"
  value={boards.length}
/>

<StatCard
  title="Tasks"
  value={tasks.length}
/>

<StatCard
  title="Completed"
  value={
    tasks.filter(
      (task) => task.status === "Done"
    ).length
  }
/>

<StatCard
  title="Pending"
  value={
    tasks.filter(
      (task) => task.status !== "Done"
    ).length
  }
/>
      </div>

      {boards.length === 0 ? (
  <div
    className={`rounded-2xl border-2 border-dashed p-12 text-center ${
      theme === "dark"
        ? "border-slate-700 bg-slate-900"
        : "border-slate-300 bg-white"
    }`}
  >
    <div className="text-6xl mb-4">📁</div>

    <h2
      className={`text-2xl font-bold ${
        theme === "dark"
          ? "text-white"
          : "text-slate-900"
      }`}
    >
      No Boards Yet
    </h2>

    <p
      className={`mt-3 ${
        theme === "dark"
          ? "text-slate-400"
          : "text-slate-600"
      }`}
    >
      Create your first board to organize your work and manage tasks.
    </p>

    <button
      onClick={() => setShowModal(true)}
      className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition"
    >
      + Create Your First Board
    </button>
  </div>
) : (
  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    {boards.map((board) => (
      <BoardCard
        key={board._id}
        board={board}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    ))}
  </div>
)}

      {showModal && (
        <CreateBoardModal
          onClose={() => setShowModal(false)}
          onSubmit={handleCreate}
        />
      )}

      {showEditModal && selectedBoard && (
  <EditBoardModal
    board={selectedBoard}
    onClose={() => {
      setShowEditModal(false);
      setSelectedBoard(null);
    }}
    onSave={handleUpdate}
  />
)}
    </DashboardLayout>
  );
}

export default Dashboard;