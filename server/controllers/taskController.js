import Task from "../models/Task.js";
import Board from "../models/Board.js";

// @desc Create Task
// @route POST /api/tasks
// @access Private
export const createTask = async (req, res) => {
  try {
    const {
      title,
      description,
      priority,
      status,
      dueDate,
      board,
    } = req.body;

    if (!title || !board) {
      return res.status(400).json({
        success: false,
        message: "Title and Board are required",
      });
    }

    // Verify the board belongs to the logged-in user
    const boardExists = await Board.findOne({
      _id: board,
      owner: req.user._id,
    });

    if (!boardExists) {
      return res.status(404).json({
        success: false,
        message: "Board not found",
      });
    }

    const task = await Task.create({
      title,
      description,
      priority,
      status,
      dueDate,
      board,
      owner: req.user._id,
    });

    res.status(201).json({
      success: true,
      task,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};
// @desc Get all tasks
// @route GET /api/tasks
// @access Private
export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({
      owner: req.user._id,
    })
      .populate("board", "title")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      tasks,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};
// @desc Get single task
// @route GET /api/tasks/:id
// @access Private
export const getTaskById = async (req, res) => {
  try {
    const task = await Task.findOne({
      _id: req.params.id,
      owner: req.user._id,
    }).populate("board", "title");

    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task not found",
      });
    }

    res.json({
      success: true,
      task,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};
// @desc Update task
// @route PUT /api/tasks/:id
// @access Private
export const updateTask = async (req, res) => {
  try {
    const task = await Task.findOne({
      _id: req.params.id,
      owner: req.user._id,
    });

    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task not found",
      });
    }

    Object.assign(task, req.body);

    await task.save();

    res.json({
      success: true,
      task,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};
// @desc Delete task
// @route DELETE /api/tasks/:id
// @access Private
export const deleteTask = async (req, res) => {
  try {
    const task = await Task.findOne({
      _id: req.params.id,
      owner: req.user._id,
    });

    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task not found",
      });
    }

    await task.deleteOne();

    res.json({
      success: true,
      message: "Task deleted successfully",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};
// @desc Update task status
// @route PATCH /api/tasks/:id/status
// @access Private
export const updateTaskStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const task = await Task.findOne({
      _id: req.params.id,
      owner: req.user._id,
    });

    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task not found",
      });
    }

    task.status = status;

    await task.save();

    res.json({
      success: true,
      task,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};