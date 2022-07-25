const workoutService = require('../services/workoutService');

const getAllWorkouts = (req, res) => {
  const allWorkouts = workoutService.getAllWorkouts();
  res.send('Get all workouts');
}

const getWorkoutById = (req, res) => { 
  const workoutById = workoutService.getWorkoutById(req.params.workoutId);
  res.send(`Get workout with id ${req.params.workoutId}`);
}

const createNewWorkout = (req, res) => {
  const createdWorkout = workoutService.createNewWorkout(req.params.workoutId);
  res.send('Create a new workout');
}

const updateWorkoutById = (req, res) => { 
  const updatedWorkout = workoutService.updateWorkoutById(req.params.workoutId);
  res.send(`Update workout with id ${req.params.workoutId}`);
}

const deleteWorkoutById = (req, res) => {
  const deletedWorkout = workoutService.deleteWorkoutById(req.params.workoutId);
  res.send(`Delete workout with id ${req.params.workoutId}`);
}

module.exports = {
  getAllWorkouts,
  getWorkoutById,
  createNewWorkout,
  updateWorkoutById,
  deleteWorkoutById
}