// src/components/Article/ArticleForm.jsx
import React, { useState } from "react";
import { createArticle } from "../../services/ArticleService";

const ArticleForm = ({ onArticleCreated }) => {
  const [titre, setTitre] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");

      // 👉 Vérifie que le token est bien récupéré
      console.log("Token actuel :", token);

      await createArticle({ title: titre, content }, token);
      setTitre("");
      setContent("");
      if (onArticleCreated) onArticleCreated();
    } catch (error) {
      console.error("Erreur lors de la création de l'article", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Créer un article</h2>
      <div>
        <label>Titre :</label>
        <input
          type="text"
          value={titre}
          onChange={(e) => setTitre(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Content :</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </div>
      <button type="submit">Créer</button>
    </form>
  );
};

export default ArticleForm;
