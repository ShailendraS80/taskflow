import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";
import DashboardLayout from "../components/layout/DashboardLayout";
import BoardCard from "../components/dashboard/BoardCard";
import { getBoards } from "../services/boardService";

function Boards() {
  const { token } = useAuth();
  const { theme } = useTheme();

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
      <h1
        className={`text-3xl font-bold mb-8 ${
          theme === "dark"
            ? "text-white"
            : "text-slate-900"
        }`}
      >
        My Boards
      </h1>

      {boards.length === 0 ? (
        <p
          className={
            theme === "dark"
              ? "text-slate-400"
              : "text-slate-600"
          }
        >
          No boards available.
        </p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {boards.map((board) => (
            <BoardCard
              key={board._id}
              board={board}
            />
          ))}
        </div>
      )}
    </DashboardLayout>
  );
}

export default Boards;