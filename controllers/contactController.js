const { sendEmail } = require("../utils/mailer");
const Contact = require("../models/Contact");

const handleContactForm = async (req, res) => {
  try {
    console.log("📩 Received form data:", req.body);

    const { name, companyName, email, mobile, message } = req.body;

    if (!name || !companyName || !email || !mobile || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // 🕒 Get current IST date-time
    const istOffset = 5.5 * 60 * 60 * 1000; // IST offset in milliseconds
    const istDate = new Date(Date.now() + istOffset);

    // ✅ Save with IST timestamps
    const contactData = await Contact.create({
      name,
      companyName,
      email,
      mobile,
      message,
      createdAt: istDate,
      updatedAt: istDate,
    });

    // ✅ Send Email
    const result = await sendEmail(name, companyName, email, mobile, message);

    console.log("📨 Email send result:", result);
    if (result.success) {
      return res.status(200).json({
        success: "Emails sent successfully!",
      });
    } else {
      return res.status(500).json({ error: result.message });
    }
  } catch (error) {
    console.error("❌ Error in handleContactForm:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = handleContactForm;
