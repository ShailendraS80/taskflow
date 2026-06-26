import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { getBoards } from "../../services/boardService";
import DashboardLayout from "../../components/layout/DashboardLayout";

function Dashboard() {
  const { token } = useAuth();
  const [boards, setBoards] = useState([]);

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

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold text-white mb-8">
        My Boards
      </h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {boards.map((board) => (
          <div
            key={board._id}
            className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-blue-500 transition"
          >
            <h2 className="text-xl font-semibold text-white">
              {board.title}
            </h2>

            <p className="text-slate-400 mt-2">
              {board.description}
            </p>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;