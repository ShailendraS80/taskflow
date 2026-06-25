import Board from "../models/Board.js";

// @desc Create Board
// @route POST /api/boards
// @access Private
export const createBoard = async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title) {
      return res.status(400).json({
        success: false,
        message: "Board title is required",
      });
    }

    const board = await Board.create({
      title,
      description,
      owner: req.user._id,
    });

    res.status(201).json({
      success: true,
      board,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};
// @desc Get all boards of logged-in user
// @route GET /api/boards
// @access Private
export const getBoards = async (req, res) => {
  try {
    const boards = await Board.find({ owner: req.user._id }).sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      boards,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};
// @desc Get single board
// @route GET /api/boards/:id
// @access Private
export const getBoardById = async (req, res) => {
  try {
    const board = await Board.findOne({
      _id: req.params.id,
      owner: req.user._id,
    });

    if (!board) {
      return res.status(404).json({
        success: false,
        message: "Board not found",
      });
    }

    res.status(200).json({
      success: true,
      board,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};
// @desc Update board
// @route PUT /api/boards/:id
// @access Private
export const updateBoard = async (req, res) => {
  try {
    const { title, description } = req.body;

    const board = await Board.findOne({
      _id: req.params.id,
      owner: req.user._id,
    });

    if (!board) {
      return res.status(404).json({
        success: false,
        message: "Board not found",
      });
    }

    board.title = title || board.title;
    board.description = description || board.description;

    await board.save();

    res.json({
      success: true,
      board,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};
// @desc Delete board
// @route DELETE /api/boards/:id
// @access Private
export const deleteBoard = async (req, res) => {
  try {
    const board = await Board.findOne({
      _id: req.params.id,
      owner: req.user._id,
    });

    if (!board) {
      return res.status(404).json({
        success: false,
        message: "Board not found",
      });
    }

    await board.deleteOne();

    res.json({
      success: true,
      message: "Board deleted successfully",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};