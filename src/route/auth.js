import express from "express";
import authController from "../controller/auth_controller";

const router = express.Router();
router.get("/user_profile", authController.userProfile);
router.post("/login", authController.login);
router.post("/logout", authController.logout);
router.post("/refresh_token", authController.refreshToken);

export default router;
