const express = require("express");
const cors = require("cors");

const healthRoutes = require("./routes/healthRoutes");
const userRoutes = require("./routes/healthRoutes");
const authRoutes = require("./routes/authRoutes");

const notFoundMiddleware = require("./middleware/notFoundMiddleware");
const errorMiddleware = require("./middleware/errorMiddleware");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", healthRoutes);
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

// 404 Middleware
app.use(notFoundMiddleware);

// Global Error Middleware
app.use(errorMiddleware);

module.exports = app;
