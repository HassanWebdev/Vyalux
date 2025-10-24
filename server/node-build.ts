import path from "path";
import { fileURLToPath } from "url";
import { createServer } from "./index.js";
import express from "express";
// Fix __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = createServer();
const port = process.env.PORT || 3000;
// In production, serve the built SPA files
const distPath = path.join(__dirname, "../spa");
// Serve static files
app.use(express.static(distPath));
// Handle React Router - serve index.html for all non-API routes
app.get("*", (req, res) => {
  // Don't serve index.html for API routes
  if (req.path.startsWith("/api/") || req.path.startsWith("/health")) {
    return res.status(404).json({ error: "API endpoint not found" });
  }
  res.sendFile(path.join(distPath, "index.html"));
});
app.listen(port, () => {
  console.log(`:rocket: Fusion Starter server running on port ${port}`);
  console.log(`:mobile_phone: Frontend: http://localhost:${port}`);
  console.log(`:spanner: API: http://localhost:${port}/api`);
});
// Graceful shutdown
process.on("SIGTERM", () => {
  console.log(":octagonal_sign: Received SIGTERM, shutting down gracefully");
  process.exit(0);
});
process.on("SIGINT", () => {
  console.log(":octagonal_sign: Received SIGINT, shutting down gracefully");
  process.exit(0);
});