const express = require('express');
const v1WorkoutRoutes = require('./v1/routes/workoutRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/api/v1/workoutRoutes', v1WorkoutRoutes);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});