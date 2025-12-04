const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB Database Connected...");
  } catch (error) {
    console.error("Database Connection Error:", error);
    process.exit(1);
  }
};

module.exports = connectDB;



// const mongoose = require("mongoose");
// const json2xls = require("json2xls");
// const fs = require("fs");
// const moment = require("moment-timezone");

// const Contact = require('../models/Contact');
// const DownloadBrochure = require('../models/Brochure');


// // Replace with your actual MongoDB URI
// const MONGO_URI = "mongodb+srv://ksradmin2025:<your_password>@cluster0.mc280by.mongodb.net/test?retryWrites=true&w=majority";

// mongoose.connect(MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => {
//   console.log("Connected to MongoDB");

//   // You can call your export function here if needed
//   exportData();
// })
// .catch((err) => console.error("Error connecting to MongoDB:", err));

// async function exportData() {
//   try {
//     // Fetch the data from MongoDB collections
//     const contacts = await Contact.find().lean();
//     const brochures = await DownloadBrochure.find().lean();

//     // Convert timestamps to IST before export
//     contacts.forEach(contact => {
//       contact.createdAt = moment(contact.createdAt).tz("Asia/Kolkata").format();
//       contact.updatedAt = moment(contact.updatedAt).tz("Asia/Kolkata").format();
//     });

//     brochures.forEach(brochure => {
//       brochure.createdAt = moment(brochure.createdAt).tz("Asia/Kolkata").format();
//       brochure.updatedAt = moment(brochure.updatedAt).tz("Asia/Kolkata").format();
//     });

//     // Convert data to Excel format
//     const contactsXLS = json2xls(contacts);
//     const brochuresXLS = json2xls(brochures);

//     // Save the Excel files to disk
//     fs.writeFileSync("contacts.xlsx", contactsXLS, "binary");
//     fs.writeFileSync("brochures.xlsx", brochuresXLS, "binary");

//     console.log("✅ Exported both collections to Excel files");

//     // Close the database connection
//     mongoose.connection.close();
//   } catch (err) {
//     console.error("❌ Error exporting data:", err);
//   }
// }

