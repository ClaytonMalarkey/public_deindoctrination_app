const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  rewardPoints: { type: Number, default: 10 },
  completed: { type: Boolean, default: false },
});

module.exports = mongoose.model('Task', TaskSchema);
