import { useWorkoutsContext } from '../../hooks/useWorkoutsContext'
import { formatDistanceToNow } from 'date-fns'
import './workout-details.styles.css'

const WorkoutDetails = ({ workout }) => {
	const { dispatch } = useWorkoutsContext()

	const handleClick = async () => {
		const response = await fetch('/api/workouts/' + workout._id, {
			method: 'DELETE',
		})
		const json = await response.json()

		if (response.ok) {
			dispatch({ type: 'DELETE_WORKOUT', payload: json })
		}
	}

	return (
		<article className='workout-details'>
			<h4>{workout.title}</h4>
			<p>
				<strong>Load (kg):</strong>
				{` ${workout.load}`}
			</p>
			<p>
				<strong>Reps:</strong>
				{` ${workout.reps}`}
			</p>
			<p>
				{formatDistanceToNow(new Date(workout.createdAt), {
					addSuffix: true,
				})}
			</p>
			<span
				className='material-symbols-outlined'
				onClick={handleClick}
			>
				Delete
			</span>
		</article>
	)
}
export default WorkoutDetails
