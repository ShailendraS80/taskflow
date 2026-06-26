import { useEffect, useState } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";
import StatCard from "../../components/dashboard/StatCard";
import BoardCard from "../../components/dashboard/BoardCard";
import CreateBoardModal from "../../components/dashboard/CreateBoardModal";

import { useAuth } from "../../context/AuthContext";
import {
  getBoards,
  createBoard,
} from "../../services/boardService";

function Dashboard() {
  const { token } = useAuth();

  const [boards, setBoards] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    loadBoards();
  }, []);

  async function loadBoards() {
    try {
      const data = await getBoards(token);
      setBoards(data.boards);
    } catch (error) {
      console.error(error);
    }
  }

  async function handleCreate(boardData) {
    try {
      await createBoard(boardData, token);
      setShowModal(false);
      loadBoards();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <DashboardLayout>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-white">
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
        <StatCard title="Boards" value={boards.length} />
        <StatCard title="Tasks" value="0" />
        <StatCard title="Completed" value="0" />
        <StatCard title="Pending" value="0" />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {boards.map((board) => (
          <BoardCard
            key={board._id}
            board={board}
          />
        ))}
      </div>

      {showModal && (
        <CreateBoardModal
          onClose={() => setShowModal(false)}
          onSubmit={handleCreate}
        />
      )}
    </DashboardLayout>
  );
}

export default Dashboard;