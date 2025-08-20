import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT || 3000;

// Tạo __dirname cho ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Enable CORS
app.use(cors());

// Serve static files from public directory
app.use("/api", express.static(path.join(__dirname, "public")));

// Root endpoint
app.get("/", (req, res) => {
  res.json({
    message: "JSON API Server",
    endpoints: ["/api/users.json", "/api/products.json", "/api/categories.json"],
  });
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
