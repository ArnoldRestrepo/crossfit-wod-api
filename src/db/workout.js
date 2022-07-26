const DB = require('./db.json');
const { saveToDB } = require('./utils');

const getAllWorkouts = () => { 
  return DB.workouts
}

const createNewWorkout = (newWorkout) => { 
  const isAlreadyAdded =
    DB.workouts.findIndex((workout) => workout.name === newWorkout.name) > -1;
  
  if (isAlreadyAdded) {
    return {status: 'error', message: 'Workout already exists'};
  }

  DB.workouts.push(newWorkout);
  saveToDB(DB);
  return newWorkout;
}

module.exports = {
  getAllWorkouts,
  createNewWorkout
}