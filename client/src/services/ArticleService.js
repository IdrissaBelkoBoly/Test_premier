import axios from "axios";
import api from "./api";


// 🔹 Récupérer tous les articles
export const getAllArticles = async () => {
 // const response = await api.get("/articles");
 const response = await api.get("/articles");
  return response.data;
};

// 🔹 Créer un nouvel article
export const createArticle = async (articleData, token) => {
  return await axios.post("http://localhost:5000/api/articles", articleData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};


// 🔹 Supprimer un article
/*export const deleteArticle = async (articleId) => {
  const response = await api.delete(`/articles/${articleId}`);
  return response.data;
};*/
export const deleteArticle = async (id, token) => {
  await api.delete(`/articles/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// 🔹 Mettre à jour un article (optionnel)
export const updateArticle = async (id, articleData, token) => {
  const response = await api.put(`/articles/${id}`, articleData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};