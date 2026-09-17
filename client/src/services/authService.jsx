import api from "./api";
const register = async (userData) => {
  const response = await api.post("/aut/register", userData);

  return response.data;
};

const getCurrentUser = async () => {
  const response = await api.get("/aut/me");

  return response.data;
};

export default {
  register,
  getCurrentUser,
};
