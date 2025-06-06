import mongoose from 'mongoose';
const ArticleSchema = new mongoose.Schema({
    title: { type: String, required: true},
    content: { type: String , required: true},
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
},
{timestamps: true});
const Article = mongoose.model('Article' , ArticleSchema);
export default Article;
