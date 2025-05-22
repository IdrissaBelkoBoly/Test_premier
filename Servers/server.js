// importation des modules nécéssaires 
import express from 'express';
//import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';

//importer les middleware 
import errorHandler from './middleware/errorMiddleware.js';

// configuration 
dotenv.config();
const app = express();
const PORT = process.env.PORT||5000 ;

// les middlewares 
app.use(cors());
app.use(express.json());


//connexion à la base de donnée 

connectDB();


// routes 
import userRoutes from './routes/userRoutes.js';
import articleRoutes from './routes/articleRoutes.js';
import authRoutes from './routes/authRoutes.js';


app.use('/api/auth', authRoutes);
app.use('/api/users',userRoutes);
app.use('/api/articles',articleRoutes);


// middleware de gestion des errers 
app.use(errorHandler);

// 7️⃣ Lancement du serveur
app.listen(PORT, () => {
console.log(`🚀 Serveur lancé sur http://localhost:${PORT}`);
});
