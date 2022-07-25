const express = require('express');
const router = express.Router();
const workoutController = require('../../controllers/workoutController');

router
  .get('/', workoutController.getAllWorkouts)
  .get('/:workoutId', workoutController.getWorkoutById)
  .post('/:workoutId', workoutController.createNewWorkout)
  .patch('/:workoutId', workoutController.updateWorkoutById)
  .delete('/:workoutId', workoutController.deleteWorkoutById);


module.exports = router;