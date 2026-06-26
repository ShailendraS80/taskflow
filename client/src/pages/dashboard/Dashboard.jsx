import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { getBoards } from "../../services/boardService";

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
      console.log(error);
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <h1 className="text-4xl font-bold mb-8">
        My Boards
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {boards.map((board) => (
          <div
            key={board._id}
            className="bg-slate-900 rounded-xl p-6 border border-slate-800"
          >
            <h2 className="text-xl font-semibold">
              {board.title}
            </h2>

            <p className="text-slate-400 mt-2">
              {board.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;