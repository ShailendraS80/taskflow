import express from "express";
import {
  createBoard,
  getBoards,
  getBoardById,
  updateBoard,
  deleteBoard,
} from "../controllers/boardController.js";

import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router
  .route("/")
  .get(protect, getBoards)
  .post(protect, createBoard);

router
  .route("/:id")
  .get(protect, getBoardById)
  .put(protect, updateBoard)
  .delete(protect, deleteBoard);

export default router;