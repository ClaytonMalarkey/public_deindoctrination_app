const express = require('express');
const { getTasks, completeTask } = require('../controllers/taskController');

const router = express.Router();

router.get('/', getTasks);
router.post('/:id/complete', completeTask);

module.exports = router;
