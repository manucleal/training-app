import initialState from '../store/initialState'

const reducer = (state = initialState, action) => {	
	switch(action.type) {
		case 'REGISTER':
			return { ...state, logged: true }		
		case 'LOGIN':
			return { ...state, logged: true }
		case 'LOGOUT':
			return { ...state, logged: false }			
        case 'SET_TRAININGS':
			return { ...state, trainings: action.payload }
		case 'SET_TRAININGS_TYPES':
			return { ...state, trainingsTypes: action.payload }
		case 'SET_TRAINING_TYPES_MIN':
			return { ...state, trainingsTypesMin: action.payload }
		case 'SAVE_TRAINING':
			return { ...state, trainings: [...state.trainings, action.payload ] }
		case 'SAVE_IMC':
			return { ...state, imc: action.payload };	
		case 'DELETE_TRAINING':
			return { ...state, trainings: state.trainings.filter(t => t.id != action.payload) }
		default:
			return state;
	}
}

export default reducer;