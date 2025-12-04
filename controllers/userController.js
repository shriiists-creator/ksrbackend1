const { sendCompanyEmail } = require("../utils/mailer");
const DownloadBrochure = require("../models/Brochure");

const handleCompanyEmail = async (req, res) => {
  console.log("📩 Received form data:", req.body);
  const { email, companyName } = req.body;

  try {
    if (!email || !companyName) {
      return res.status(400).json({
        success: false,
        message: "Email and company name are required.",
      });
    }

    // 🕒 Get current IST date-time
    const istOffset = 5.5 * 60 * 60 * 1000; // IST offset in milliseconds
    const istDate = new Date(Date.now() + istOffset);

    // ✅ Save to MongoDB with IST timestamp
    await DownloadBrochure.create({
      email,
      companyName,
      createdAt: istDate,
      updatedAt: istDate,
    });

    // ✅ Send Email
    const result = await sendCompanyEmail(email, companyName);

    if (result.success) {
      return res.status(200).json({ success: true, message: result.message });
    } else {
      return res.status(500).json({ success: false, message: result.message });
    }
  } catch (error) {
    console.error("API error:", error);
    return res.status(500).json({
      success: false,
      message: "An error occurred while sending the email.",
      error: error.message,
    });
  }
};

module.exports = handleCompanyEmail;


