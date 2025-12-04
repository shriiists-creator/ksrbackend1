require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const contactRoutes = require("./routes/contactRoutes")
const app = express();
app.use(express.json()); // ✅ Required for parsing JSON
app.use(express.urlencoded({ extended: true })); // ✅ Required if you're using forms
connectDB();
app.use(express.json());
app.use(cors())
app.use("/api", contactRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});




// ✅ Allow requests from your frontend (GitHub Pages)
// app.use(cors({
//   origin: "https://shriiitrackingsolutions.github.io", // Allow only your frontend
//   methods: "GET,POST", // Allow necessary methods
//   allowedHeaders: "Content-Type"
// }));
// app.use(cors())

// ✅ If using a wildcard (allow any origin) - use this instead:
// app.use(cors());
// Your existing routes
// app.post("/api/send", (req, res) => {
//     res.send({ message: "Email sent successfully!" });
// });

// app.post('/api/c ontact', (req, res) => {
//     res.send('Contact API working!');
// });
// app.listen(PORT, "0.0.0.0", () => console.log(`Server running on http://0.0.0.0:${PORT}`));

// const express = require("express");
// const cors = require("cors");
// const contactRoutes = require("./routes/router");

// const app = express();
// const PORT = process.env.PORT || 5000;


// app.use(express.json()); 
// app.use(cors()); 
// { origin: " https://anujzbundela.github.io/Submition/" }

// app.use("/api", contactRoutes);

// app.post("sendEmail", async (req, res) => {
//     console.log("Received request:", req.body); 
//     res.json({ message: "Testing API response!" }); 
// });


// app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

// app.listen(PORT, "0.0.0.0", () => console.log(`Server running on http://0.0.0.0:${PORT}`));


// Endpoint for the main contact form
// app.post("/sendEmail", (req, res) => {
//     const { name, companyName,  email, mobile, message } = req.body;
//     if (!name || !companyName || !email || !mobile || !message) {
//       return res.status(400).json({ error: "Missing required fields for contact form." });
//     }
//     // Process the contact form submission (e.g., send email, store in DB, etc.)
//     console.log("Contact form submission received:", { name, companyName, email, mobile, message });
//     res.status(200).json({ message: "Contact form submitted successfully!" });
//   });


  // app.post("/sendCompanyEmail", (req, res) => {
  //   const { email, companyName} = req.body;
  //   if (!email || !companyName) {
  //     return res.status(400).json({ error: "Email is required for download." });
  //   }
  //   // Process the download form submission (e.g., generate PDF, send email with PDF, etc.)
  //   console.log("Footer form submission received:", { email, companyName });
  //   res.status(200).json({ message: "PDF has been sent to your email!" });
  // });



