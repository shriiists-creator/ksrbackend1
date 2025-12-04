const express = require("express");
const handleContactForm = require("../controllers/contactController");
const handleCompanyEmail = require("../controllers/userController");

const router = express.Router();

router.post("/sendEmail", handleContactForm);
router.post("/sendCompanyEmail", handleCompanyEmail);

module.exports = router;
