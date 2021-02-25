import initialState from '../store/initialState'

const reducer = (state = initialState, action) => {	
	switch(action.type) {
		case 'REGISTER':
			return { ...state, logged: true }		
		case 'LOGIN':
			return { ...state, logged: true }
        case 'SET_TRAININGS':
			return { ...state, trainings: action.payload }
		case 'SET_TRAININGS_TYPES':
			return { ...state, trainingsTypes: action.payload }
		default:
			return state;
	}
}

export default reducer;