const router = require("express").Router();
const articleController = require("../controller/article_controller");

router.get("/all_article", articleController.allArticle);
router.get("/article_detail", articleController.articleDetail);

module.exports = router;
