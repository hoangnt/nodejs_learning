import express from "express";
import entryController from "../controller/entry_controller";

const router = express.Router();
router.get("/", entryController.entry);

export default router;
