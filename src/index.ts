//server.ts  →  process / infra concerns
import app from "./app";

const PORT = process.env.PORT || 3000;

/* -------------------- Server Start -------------------- */
const server = app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

/* -------------------- Graceful Shutdown -------------------- */
process.on("SIGTERM", () => {
  console.log("SIGTERM received. Shutting down gracefully...");
  server.close(() => {
    console.log("Process terminated");
  });
});

process.on("SIGINT", () => {
  console.log("SIGINT received. Shutting down gracefully...");
  server.close(() => {
    console.log("Process terminated");
  });
});

/* -------------------- Crash Safety -------------------- */
process.on("unhandledRejection", (reason) => {
  console.error("Unhandled Rejection:", reason);
  server.close(() => process.exit(1));
});

process.on("uncaughtException", (error) => {
  console.error("Uncaught Exception:", error);
  process.exit(1);
});
