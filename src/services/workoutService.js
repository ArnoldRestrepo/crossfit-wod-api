const {v4: uuid} = require('uuid');
const Workout = require('../db/workout');

const getAllWorkouts = () => {
  const allWorkouts = Workout.getAllWorkouts();
  return allWorkouts;
}
const getWorkoutById = () => {
  return;
}
const createNewWorkout = (newWorkout) => {
  const workoutToInsert = {
    id: uuid(),
    createdAt: new Date().toLocaleDateString("en-US", { timezone: "UTC" }),
    updatedAt: new Date().toLocaleDateString("en-US", { timezone: "UTC" }),
    ...newWorkout
  }
  const workoutCreated = Workout.createNewWorkout(workoutToInsert);
  return workoutCreated;
}
const updateWorkoutById = () => {
  return;
}
const deleteWorkoutById = () => {
  return;
}

module.exports = {
  getAllWorkouts,
  getWorkoutById,
  createNewWorkout,
  updateWorkoutById,
  deleteWorkoutById
}