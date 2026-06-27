import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Dashboard from "./pages/dashboard/Dashboard";
import Board from "./pages/Board";
import Boards from "./pages/Boards";
import NotFound from "./pages/NotFound";

import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/boards"
          element={
            <ProtectedRoute>
              <Boards />
            </ProtectedRoute>
          }
        />

        <Route
          path="/board/:id"
          element={
            <ProtectedRoute>
              <Board />
            </ProtectedRoute>
          }
        />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;