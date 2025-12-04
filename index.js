require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const contactRoutes = require("./routes/contactRoutes");

const app = express();

// --- Middleware Setup ---

// 1. Configure CORS
// This should be one of the first middleware.
const allowedOrigins = [
  "http://127.0.0.1:3000", // Your local frontend
  "http://localhost:3000", // Another common local address
  // Add your deployed frontend URL here if you have one
  // e.g., "https://your-frontend.vercel.app"
];

app.use(cors({
  origin: function (origin, callback) {
    // allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));

// 2. Body Parsers
app.use(express.json()); // For parsing application/json
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded

// 3. Database Connection
connectDB();

// 4. API Routes
app.use("/api", contactRoutes);

// --- Server Start ---
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
