const router = require("express").Router();
const userController = require("../controller/user_controller");

router.get("/user", userController.getUser);

module.exports = router;
