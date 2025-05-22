import api from "./api";

// ✅ Ajoute cette fonction
export const getAllUsers = async () => {
  const response = await api.get("/users"); // assure-toi que cette route existe dans ton backend
  return response.data;
};


// 🔹 Connexion utilisateur (si besoin)
export const loginUser = async (credentials) => {
  const response = await api.post("/users/login", credentials); // ✅ ROUTE CORRECTE
  return response.data;
};

// 🔹 Supprimer un client
export const deleteUser = async (userId) => {
  const response = await api.delete(`/users/${userId}`); // ✅ ROUTE CORRECTE
  return response.data;
};

// 🔹 Mettre à jour un client
export const updateUser = async (userId, userData) => {
  const response = await api.put(`/users/${userId}`, userData); // ✅ ROUTE CORRECTE
  return response.data;
};
