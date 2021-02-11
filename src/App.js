import Dashboard from './components/Dashboard';
import Sidebar from "./components/Sidebar";
import Head from "./components/Head";
import './App.css';

function App() {
	return (
		<div className="App">
			<Head/>
			<div id="right-panel" class="right-panel">
				<Dashboard />
			</div>
			<Sidebar/>
		</div>
	);
}

export default App;
