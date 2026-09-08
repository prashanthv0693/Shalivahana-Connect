const express = require("express");
const cors = require("cors");

const healthRoutes = require("./routes/healthRoutes");
const notFoundMiddleware = require("./middleware/notFoundMiddleware");
const errorMiddleware = require("./middleware/errorMiddleware");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", healthRoutes);

// 404 Middleware
app.use(notFoundMiddleware);

// Global Error Middleware
app.use(errorMiddleware);

module.exports = app;
