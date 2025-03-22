const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const taskRoutes = require('./routes/taskRoutes');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/deindoctrinationApp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api/tasks', taskRoutes);

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
