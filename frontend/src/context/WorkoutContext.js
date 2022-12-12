import { useReducer, createContext } from 'react'

export const WorkoutContext = createContext()

export const workoutsReducer = (state, action) => {
	switch (action.type) {
		case 'SET_WORKOUTS':
			return {
				workouts: action.payload,
			}
		case 'CREATE_WORKOUT':
			return {
				workouts: [action.payload, ...state.workouts],
			}
		default:
			return state
	}
}

export const WorkoutContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(workoutsReducer, {
		workouts: null,
	})

	return (
		<WorkoutContext.Provider value={{ ...state, dispatch }}>
			{children}
		</WorkoutContext.Provider>
	)
}

// We could just use useContext() hook
// We are going to try to create a custom hook for our context
// We also spread the state so that we could get all the properties