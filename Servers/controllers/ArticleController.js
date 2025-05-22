import ArticleModel from '../models/ArticleModel.js';

export const createArticle = async (req, res)=> {
    try{
    const { title, content} = req.body;
   // verifier que les champs necessaires sont present
   if(!title || !content){
    return res.status(400).json({message: "champs manquants"});
   }

   // creer un article
   const newArticle = new ArticleModel({title, content,author: req.user._id});
   const savedArticle = await newArticle.save();
   res.status(201).json({message: "Article crée avec succés,", article: savedArticle});
    }catch(error){
        console.error("error lors de la création d'article");
        res.status(500).json({message: "Error serveur", error});
    };
};

export const getArticles = async (req, res) => {
  try {
    //const articles = await ArticleModel.find().sort({ createdAt: -1 }); // tri du plus récent au plus ancien
    const articles = await ArticleModel.find()
      .populate("author", "email")
      .sort({ createdAt: -1 });
    res.status(200).json(articles);
  } catch (error) {
    console.error("Erreur lors de la récupération des articles :", error);
    res.status(500).json({ message: "Erreur serveur" });
  }
};

export const deleteArticle = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await ArticleModel.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ message: "Article non trouvé" });
    }

    res.status(200).json({ message: "Article supprimé avec succès" });
  } catch (error) {
    console.error("Erreur lors de la suppression :", error);
    res.status(500).json({ message: "Erreur serveur" });
  }
};
  // mettre a jour un article
  
export const updateArticle = async (req, res) => {
  try {
    const articleId = req.params.id;
    const { title, content } = req.body;

    // Trouver l'article par ID et mettre à jour les champs title et content
    const updatedArticle = await ArticleModel.findByIdAndUpdate(
      articleId,
      { title, content },
      { new: true } // renvoyer l'article mis à jour
    );

    if (!updatedArticle) {
      return res.status(404).json({ message: "Article non trouvé" });
    }

    res.status(200).json(updatedArticle);
  } catch (error) {
    console.error("Erreur lors de la mise à jour de l'article :", error);
    res.status(500).json({ message: "Erreur serveur" });
  }
};



//export default {createArticle, getArticles, deleteArticle};