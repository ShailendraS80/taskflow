import api from "../api/axios";

export const getBoards = async (token) => {
  const response = await api.get("/boards", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export const createBoard = async (boardData, token) => {
  const response = await api.post("/boards", boardData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

// ⭐ ADD THIS
export const updateBoard = async (id, boardData, token) => {
  const response = await api.put(`/boards/${id}`, boardData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export const deleteBoard = async (id, token) => {
  const response = await api.delete(`/boards/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};