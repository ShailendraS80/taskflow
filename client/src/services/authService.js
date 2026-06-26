import api from "../api/axios";

export const register = async (userData) => {
  const response = await api.post("/auth/register", userData);
  return response.data;
};

export const login = async (userData) => {
  console.log("Sending:", userData);

  const response = await api.post("/auth/login", userData);

  console.log("Response:", response);

  return response.data;
};