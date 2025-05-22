import express from "express";
const router = express.Router(); // ✅ Majuscule

import {
  newUser,
  loginUser,
  deleteUser,
  getAllUsers,
} from "../controllers/UserController.js";
import authMiddleware from "../middleware/authMiddleware.js";

// 🔐 Route protégée de test (profil)
router.get("/profile", authMiddleware, (req, res) => {
  res.status(200).json({
    message: "Voici ton profil !",
    user: req.user,
  });
});

// Inscription
router.post("/register", newUser);

// Connexion
router.post("/login", loginUser);

// Suppression
router.delete("/:id", deleteUser); // ou tu peux utiliser POST si tu préfères

// Nouvelle route pour récuperer tous les utilisateurs 
router.get("/",getAllUsers);

export default router;
