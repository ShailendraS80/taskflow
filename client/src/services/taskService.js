import api from "../api/axios";

export const getTasks = async (boardId, token) => {
  const response = await api.get(
    `/tasks?boardId=${boardId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

export const createTask = async (
  taskData,
  token
) => {
  const response = await api.post(
    "/tasks",
    taskData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

export const updateTask = async (
  id,
  taskData,
  token
) => {
  const response = await api.put(
    `/tasks/${id}`,
    taskData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

export const deleteTask = async (
  id,
  token
) => {
  const response = await api.delete(
    `/tasks/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};