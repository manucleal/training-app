import initialState from '../store/initialState'

const reducer = (state = initialState, action) => {	
	switch(action.type) {
		case 'setCredentials':
			return { ...state, userId: action.payload.id, accessToken: action.payload.token }
        case 'setTrainning':
            let newTrainning = [{ 
				id: 1234, 
				minutes: 60, 
				training_type: 23, 
				weight: 1.62, 
				user_id: 321
			}];
			return { ...state, training: newTrainning }    
		case 'saveTraining':
			return { ...state, training: [ ...state.training, { id: state.id, training_type: state.training_type, minutes: state.minutes, weight: state.weight} ] }			
		default:
			return state;
	}
}

export default reducer;

		// case 'intTraining':
		// 	return { ...state, training: [...state.training, { 
		// 		id: 5555, 
		// 		minutes: 50, 
		// 		training_type: 53, 
		// 		weight: 1.62, 
		// 		user_id: 321
		// 	} ] }				
		// case 'setTraining':
		// 	// let newTrainning = { 
		// 	// 	id: action.payload.id, 
		// 	// 	minutes: action.payload.minutes, 
		// 	// 	training_type: action.payload.training_type, 
		// 	// 	weight: action.payload.weight, 
		// 	// 	user_id: action.payload.user_id
		// 	// }
		// 	let newTrainning = { 
		// 		id: 1234, 
		// 		minutes: 60, 
		// 		training_type: 23, 
		// 		weight: 1.62, 
		// 		user_id: 321
		// 	}			
		// 	return { ...state, training: [...state.training, newTrainning ] }