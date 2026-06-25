import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import authRoutes from "./routes/authRoutes.js";
import boardRoutes from "./routes/boardRoutes.js";

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/boards", boardRoutes);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "TaskFlow API Running 🚀",
  });
});

export default app;