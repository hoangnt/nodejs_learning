import express from "express";
import articleController from "../controller/article_controller";

const router = express.Router();
router.get("/all_article", articleController.allArticle);
router.get("/article_detail", articleController.articleDetail);

export default router;
