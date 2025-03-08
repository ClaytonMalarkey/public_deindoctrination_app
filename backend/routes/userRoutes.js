// backend/routes/userRoutes.js
const express = require('express');
const router = express.Router();

// Dummy user data
const userData = {
  name: "Clateman Malarkey",
  progress: 42
};

// Route to get user data
router.get('/me', (req, res) => {
  res.json(userData);
});

module.exports = router;
