const router = require("express").Router();
const authController = require("../controller/auth_controller");

router.get("/user_profile", authController.userProfile);
router.post("/login", authController.login);
router.post("/logout", authController.logout);
router.post("/refresh_token", authController.refreshToken);

module.exports = router;
