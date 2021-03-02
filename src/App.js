import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from './components/Dashboard';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from "react-redux";
import { Alert } from './components/Alert';
import store from './store/store';

import './App.css';

const App = () => {
	return (
		<Provider store={store}>			
			<Router>
				<Alert />
				<Route exact path='/' component={Dashboard} />
				<Route path='/login' component={Login} />
				<Route path='/register' component={Register} />
			</Router>
		</Provider>
	);
}

export default App;