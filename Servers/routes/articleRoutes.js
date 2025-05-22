import express from "express";
const router = express.Router();

import {
  createArticle,
  getArticles,
  deleteArticle,
  updateArticle
} from "../controllers/ArticleController.js";

import authMiddleware from "../middleware/authMiddleware.js";

// Créer un article
router.post("/", authMiddleware, createArticle);

// Obtenir tous les articles
router.get("/", getArticles);

// Supprimer un article
router.delete("/:id", deleteArticle);

router.put("/:id", authMiddleware , updateArticle);

export default router;
