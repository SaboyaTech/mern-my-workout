const express = require('express')

const {
	findWorkouts,
	findWorkout,
	createWorkout,
	deleteWorkout,
	updateWorkout,
} = require('../controllers/workoutController')

const router = express.Router()

// GET all workouts
router.get('/', findWorkouts)

// GET a single workout
router.get('/:id', findWorkout)

// POST a new workout
router.post('/', createWorkout)

// DELETE a workout
router.delete('/:id', deleteWorkout)

// UPDATE a new workout
router.patch('/:id', updateWorkout)

module.exports = router
