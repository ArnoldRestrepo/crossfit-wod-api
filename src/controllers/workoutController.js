const workoutService = require('../services/workoutService');

const getAllWorkouts = (req, res) => {
  const allWorkouts = workoutService.getAllWorkouts();
  res.send({status: 'success', data: allWorkouts});
}

const getWorkoutById = (req, res) => { 
  const workoutById = workoutService.getWorkoutById(req.params.workoutId);
  res.send(`Get workout with id ${req.params.workoutId}`);
}

const createNewWorkout = (req, res) => {
  const { body } = req;

  // Clausula de cierre
  if (!body.name && !body.mode && !body.equipment && !body.exercises && !body.trainerTips) { 
    res.send({status: 'error', message: 'Missing required fields'});
  }
  
  const newWorkout = {
    name: body.name,
    mode: body.mode,
    equipment: body.equipment,
    exercises: body.exercises,
    trainerTips: body.trainerTips
  }
  
  const createdWorkout = workoutService.createNewWorkout(newWorkout);
  if (createdWorkout.status === 'error') {
    res.status(401).send(createdWorkout);
  }
  res.status(201).send({status: 'success', data: createdWorkout});
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